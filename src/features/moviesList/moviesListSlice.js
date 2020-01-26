import { createSlice } from '@reduxjs/toolkit';

const name = 'moviesList';

const initialState = {
  data: [],
  loading: false,
  error: null,
};

const reducers = {
  fetchingStarted(state) {
    state.loading = true;
  },
  fetchingSucceeded(state, action) {
    state.loading = false;
    state.data.push(...action.payload);
  },
  fetchingFailed(state, action) {
    state.loading = false;
    state.error = action.payload;
    console.error(action.payload);
  }
};

const moviesListSlice = createSlice({
  name,
  initialState,
  reducers
});

export const {
  fetchingStarted,
  fetchingSucceeded,
  fetchingFailed
} = moviesListSlice.actions;

export default moviesListSlice.reducer;