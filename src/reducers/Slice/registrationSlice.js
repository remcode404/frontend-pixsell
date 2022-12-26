import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

function parseJwt (token) {
  var base64Url = token.split('.')[1];
  var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));

  return JSON.parse(jsonPayload);
};


const initialState = {
  error: null,
  signUp: false,
  signIn: false,
  token: localStorage.getItem("token"),
  userID: parseJwt(localStorage.getItem("token"))
};

export const authSignUp = createAsyncThunk(
  "auth/signup",
  async ({ nickName, email, usersName, password }, thunkAPI) => {
    try {
      const res = await fetch("http://localhost:3001/auth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ nickName, email, usersName, password }),
      });
      const json = await res.json();
      if (json.error) {
        return thunkAPI.rejectWithValue(json.error);
      }
      console.log(json);
      console.log({ nickName, email, usersName, password })
      return json;
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  }
);

export const authSignIn = createAsyncThunk(
  "auth/signin",
  async ({ nickName, email, password }, thunkAPI) => {
    try {
      const res = await fetch("http://localhost:3001/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ nickName, email, password }),
      });
      const token = await res.json();
      if (token.error) {
        return thunkAPI.rejectWithValue(token.error);
      }
      localStorage.setItem("token", token);
      return token;
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  }
);

const registrationSlice = createSlice({
  name: "registration",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(authSignUp.pending, (state) => {
        state.signUp = true;
      })
      .addCase(authSignUp.rejected, (state, action) => {
        state.signUp = false;
        state.error = action.payload;
      })
      .addCase(authSignUp.fulfilled, (state, action) => {
        state.signUp = false;
        state.error = null;
      })
      .addCase(authSignIn.pending, (state) => {
        state.signIn = true;
      })
      .addCase(authSignIn.rejected, (state, action) => {
        state.signIn = false;
        state.error = action.payload;
      })
      .addCase(authSignIn.fulfilled, (state, action) => {
        state.signIn = false;
        state.error = null;
        state.token = action.payload;
      });
  },
});

export default registrationSlice.reducer
