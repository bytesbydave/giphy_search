import {
  CHANGE_SEARCH_FIELD,
  REQUEST_GIPHY_PENDING,
  REQUEST_GIPHY_SUCCESS,
  REQUEST_GIPHY_FAILED
} from './types';

import giphy from '../api/giphy';

export const setSearchField = text => {
  return {
    type: CHANGE_SEARCH_FIELD,
    payload: text
  };
};

export const requestGiphys = term => async dispatch => {
  dispatch({ type: REQUEST_GIPHY_PENDING });
  try {
    const response = await giphy.get('/v1/gifs/search', {
      params: {
        q: term
      }
    });
    dispatch({ type: REQUEST_GIPHY_SUCCESS, payload: response.data.data });
  } catch (err) {
    dispatch({ type: REQUEST_GIPHY_FAILED, payload: err });
  }
};