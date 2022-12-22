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
      console.log(data);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
