import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import moviesListReducer from './features/moviesList/moviesListSlice';

const rootReducer = combineReducers({
  moviesList: moviesListReducer,
  // movieInfo: movieInfoReducer,
});

export default configureStore({
  reducer: rootReducer,
});