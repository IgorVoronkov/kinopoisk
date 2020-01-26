import React from 'react';

import MoviePoster from '../MoviePoster';
import styles from './MoviesList.module.css';

const MoviesList = ({ movies }) => (
  <ul className={styles.list}>
    {movies.map(movie => (
      <li key={movie.id}>
        <MoviePoster movie={movie} />
      </li>
    ))}
  </ul>
)

export default MoviesList;