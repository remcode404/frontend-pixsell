import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  promo: [],
};
export const fetchPromos = createAsyncThunk(
  "fetch/promos",
  async (_, thunkAPI) => {
    try {
      const res = await fetch(`http://localhost:3001/promo`);
      const data = await res.json();
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const promoSclice = createSlice({
  name: "fetchPromo",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(fetchPromos.fulfilled, (state, action) => {
      state.promo = action.payload;
    });
  },
});

export default promoSclice.reducer;
