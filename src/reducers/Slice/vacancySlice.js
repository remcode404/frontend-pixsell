import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  vacancy: [],
  error: null,
  loading: false,
};

export const fetchVacancy = createAsyncThunk(
  "fetch/vacancy",
  async (_, thunkAPI) => {
    try {
      const res = await fetch(`http://localhost:3001/vacancy`);
      const data = await res.json();
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const vacancySlice = createSlice ({
  name: 'vacancy',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchVacancy.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchVacancy.fulfilled, (state, action) => {
        state.vacancy = action.payload;
        state.loading = false;
      })
      .addCase(fetchVacancy.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload
      })
  },
})

export default vacancySlice.reducer;
