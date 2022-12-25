import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  favorite: [],
   token: localStorage.getItem("token"),
  loading: false,
  error: null,
  favorites: [],
};

export const fetchFavorite = createAsyncThunk(
  "fetch/favorite",
  async (_, thunkAPI) => {
    try {
      const res = await fetch(`http://localhost:3001/users`);
      const data = await res.json();
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const saveGames = createAsyncThunk(
  "patch/users",
  async (favorites, thunkAPI) => {
    try {
      const res = await fetch(`http://localhost:3001/users/games`, {
        method: "PATCH",
        headers: {
          "Content-type": "application/json",
           Authorization: `Bearer ${initialState.token}`,
        },
        body: JSON.stringify({ favorites }),
      });
      const data = await res.json();
      console.log(data);
    
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const favoriteSlice = createSlice({
  name: "patchUser",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
    .addCase(saveGames.fulfilled, (state, action) => {
      state.favorite.push(action.payload);
    state.favorites = action.payload

    })

  },
});

export default favoriteSlice.reducer;
