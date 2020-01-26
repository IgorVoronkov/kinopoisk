import axios from 'axios';

import {
  fetchingStarted,
  fetchingSucceeded,
  fetchingFailed
} from './moviesListSlice';

import {
  BASE_PATH,
  API_KEY,
  DISCOVER,
  BY_POPULARITY
} from '../../constants';

const fetchMoviesList = () => dispatch => {
  dispatch(fetchingStarted());

  axios
    .get(`${BASE_PATH}${DISCOVER}?${BY_POPULARITY}&${API_KEY}`)
    .then(response => {
      dispatch(fetchingSucceeded(response.data.results));
    })
    .catch(error => {
      dispatch(fetchingFailed(error))
    });
}

export default fetchMoviesList;