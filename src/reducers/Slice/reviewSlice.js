import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  error: null,
  reviews: [],
  isExistenceReview: false
};

export const printReviews = createAsyncThunk('fetch/reviews', async (_, thunkAPI) => {
  try {
    const res = await fetch(`http://localhost:3001/reviews`);
    const reviews = await res.json();
    if (reviews.error) {
      return thunkAPI.rejectWithValue(reviews.error);
    }
    return thunkAPI.fulfillWithValue(reviews);
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const isExistence = createAsyncThunk('existence/reviews', async ({id}, thunkAPI) => {
  try {
    const res = await fetch(`http://localhost:3001/reviews/isexistence/${id}`,{
      headers: {
        'Authorization' :`Bearer ${localStorage.getItem('token')}`
      }
    });
    const review = await res.json()
    if (review.error) {
      return thunkAPI.rejectWithValue(review.error);
    }
    return thunkAPI.fulfillWithValue(review);
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
})

const userSlice = createSlice({
  name: 'reviews',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(printReviews.pending, (state, action) => {
        state.error = null;
      })
      .addCase(printReviews.fulfilled, (state, action) => {
        state.error = null;
        state.reviews = action.payload;
      })
      .addCase(printReviews.rejected, (state, action) => {
        state.error = action.payload;
      })

      .addCase(isExistence.pending, (state, action) => {
        state.error = null;
      })
      .addCase(isExistence.fulfilled, (state, action) => {
        state.error = null;
        state.isExistenceReview = action.payload;
      })
      .addCase(isExistence.rejected, (state, action) => {
        state.error = action.payload;
      })
  },
});

export default userSlice.reducer;
