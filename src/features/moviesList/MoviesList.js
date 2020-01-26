import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { moviesList } from '../../selectors'
import fetchMoviesList from './fetchMoviesList';

import MoviesList from '../../components/MoviesList';

export default function () {
  const movies = useSelector(moviesList);
  const dispatch = useDispatch();

  useEffect(() => {
    if (movies.data.length === 0) {
      dispatch(fetchMoviesList());
    }
  }, []);

  return !!movies.data.length && <MoviesList movies={movies.data} />
}