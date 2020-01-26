import React from 'react';

import styles from './MoviePoster.module.css';

const MoviePoster = ({ movie }) => {
  const { title, release_date, overview } = movie;

  return (
    <div className={styles.poster}>
      <img
        src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
        alt={title}
      />
      <div className={styles.info}>
        <h3 className={styles.title}>{title}</h3>
        <p><time>{release_date}</time></p>
        <p className={styles.overview}>{overview}</p>
      </div>
    </div>
  )
}

export default MoviePoster;