import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  favorite: [],
  token: localStorage.getItem("token"),
  loading: false,
  error: null,
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
  async ({ gameId, id }, thunkAPI) => {
    try {
      await fetch(`http://localhost:3001/users/games/${id}`, {
        method: "PATCH",
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${initialState.token}`,
        },
        body: JSON.stringify({ favorites: gameId }),
      });
      return  {gameId, id}
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
    builder.addCase(saveGames.fulfilled, (state, action) => {
      state.favorite = state.favorite.map((item) => {
        if (item._id === action.payload.id) {
          item.favorite.push(action.payload.gameId);
          return item;
        }
        return item;
      });
    });
  },
});

export default favoriteSlice.reducer;
