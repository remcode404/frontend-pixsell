import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  response: [],
  error: null,
  loading: false,
};

export const postResponse = createAsyncThunk(
  "post/response",
  async (text, thunkAPI) => {
   
    try {
      const res = await fetch("http://localhost:3001/response", {
        method: "POST",
        body: JSON.stringify( {name: text.text , email:text.text1, phone:text.text2, commit:text.text3} ),
        headers: {
          "Content-type": "Application/json",
        },
      });
      const data = await res.json();
      if (data.error) {
        return thunkAPI.rejectWithValue(data.error);
      }
    //   console.log(data);

      return data;
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  }
);

export const getResponse = createAsyncThunk(
  "get/response",
  async (_, thunkAPI) => {
    try {
      const res = await fetch("http://localhost:3001/response");
      const data = await res.json();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const responseSlice = createSlice({
  name: "response",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(postResponse.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(postResponse.fulfilled, (state, action) => {
        state.response.push(action.payload)
        state.loading = false;
      })
      .addCase(postResponse.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })


      .addCase(getResponse.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getResponse.fulfilled, (state, action) => {
        state.response = action.payload;
        state.loading = false;
      })
      .addCase(getResponse.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default responseSlice.reducer;
