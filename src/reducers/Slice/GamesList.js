import { createAsyncThunk, createSlice, current } from '@reduxjs/toolkit';

const initialState = {
  game: [],
  review: [],
  error: null,
  loading: false,
};

export const fetchGames = createAsyncThunk('fetch/games', async (page, thunkAPI) => {
  try {
    const res = await fetch(`http://localhost:3001/games?page=${page}&limit=${page && 2}`);
    const data = await res.json();
    return data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});



// gamesReviews
export const addReviews = createAsyncThunk('add/reviews', async (data, thunkAPI) => {
  try {
    const res = await fetch(`http://localhost:3001/games/reviews/${data.id}`, {
      method: 'POST',
      body: JSON.stringify({ text: data.textReview, isPositiveGrade: data.isGrade }),
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${thunkAPI.getState().registrationReducer.token}`,
      },
    });
    const review = await res.json();
    if (review.error) {
      return thunkAPI.rejectWithValue(review.error);
    }

    return thunkAPI.fulfillWithValue(review);
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const gameSlice = createSlice({
  name: 'fetchGame',
  initialState,
  reducers: {
    setPage(state, action) {
      state.page = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchGames.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(fetchGames.fulfilled, (state, action) => {
        state.game = action.payload;
        // console.log(action.payload);

        state.loading = false;
      })
      .addCase(fetchGames.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(addReviews.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addReviews.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.game = state.game.map((item) => {
          if (item._id === action.payload._id) {
            return action.payload;
          }
          return item;
        });
      })
      .addCase(addReviews.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});
export const { setPage } = gameSlice.actions;

export default gameSlice.reducer;
