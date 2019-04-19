import {
  CHANGE_SEARCH_FIELD,
  REQUEST_GIPHY_PENDING,
  REQUEST_GIPHY_SUCCESS,
  REQUEST_GIPHY_FAILED
} from '../actions/types';

const initialStateSearch = {
  searchField: ''
};

const initialStateGiphys = {
  isPending: false,
  giphys: [],
  error: ''
};

export const searchGiphys = (state = initialStateSearch, action = {}) => {
  switch (action.type) {
    case CHANGE_SEARCH_FIELD:
      return { ...state, searchField: action.payload };
    default:
      return state;
  }
};

export const requestGiphys = (state = initialStateGiphys, action = {}) => {
  switch (action.type) {
    case REQUEST_GIPHY_PENDING:
      return { ...state, isPending: true };
    case REQUEST_GIPHY_SUCCESS:
      return { ...state, giphys: action.payload, isPending: false };
    case REQUEST_GIPHY_FAILED:
      return { ...state, isPending: false, error: action.payload };
    default:
      return state;
  }
};
