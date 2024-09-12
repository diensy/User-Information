import {
  FETCH_ALBUMS_REJECT,
  FETCH_ALBUMS_REQUEST,
  FETCH_ALBUMS_SUCCESS,
} from "./actionType.js";

const initialState = {
  albums: [],
  loading: false,
  error: null,
};

export const albumReducers = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALBUMS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_ALBUMS_SUCCESS:
      return {
        ...state,
        loading: false,
        albums: action.payload,
      };
    case FETCH_ALBUMS_REJECT:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
