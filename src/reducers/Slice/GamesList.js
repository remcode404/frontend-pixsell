import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  game: [],
  error: null,
  loading: false,
};

export const fetchGames = createAsyncThunk(
  "fetch/games",
  async (_, thunkAPI) => {
    try {
        const res = await fetch(`http://localhost:3001/games`);
        const data = await res.json();

        return data;
      } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
      }
  }
);


export const gameSlice = createSlice({
name: "fetchGame",
initialState,
reducers: {},

extraReducers: (builder) => {
builder
.addCase(fetchGames.rejected, (state, action) => {
state.error = action.payload
state.loading = false
})
.addCase(fetchGames.fulfilled, (state, action) => {
state.game = action.payload
state.loading = false

})
.addCase(fetchGames.pending, (state, action) => {
    state.loading = true

    })



}
})


export default gameSlice.reducer