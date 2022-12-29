import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  favourites: [],
  token: localStorage.getItem("token"),
  loading: false,
  error: null,
};

export const fetchFavorite = createAsyncThunk(
  "fetch/favourites",
  async (_, thunkAPI) => {
    try {
      const res = await fetch(`http://localhost:3001/users`, {
        method: "GET",
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${initialState.token}`,
        },
      });
      const data = await res.json();
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const saveGames = createAsyncThunk(
  "patch/users",
  async ({ gameId, tokenId }, thunkAPI) => {

    try {
      await fetch(`http://localhost:3001/users/games/${tokenId}`, {
        method: "PATCH",
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${initialState.token}`,
        },
        body: JSON.stringify({ favourites: gameId }),
      });
      return { gameId, tokenId };
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
      .addCase(fetchFavorite.fulfilled, (state, action) => {
        state.favourites = action.payload;
      })
      .addCase(saveGames.fulfilled, (state, action) => {
        state.favourites = state.favourites.map((item) => {
          if (item._id === action.payload.tokenId) {
            item.favourites.push(action.payload.gameId);
    
            return item;
          }

          return item;
        });
      });
  },
});

export default favoriteSlice.reducer;
