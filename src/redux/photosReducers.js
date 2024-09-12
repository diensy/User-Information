import {
  FETCH_PHOTOS_REJECT,
  FETCH_PHOTOS_REQUEST,
  FETCH_PHOTOS_SUCCESS,
} from "./actionType.js";

const initialState = {
  photos: [],
  error: null,
  loading: false,
};

export const photosReducers = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PHOTOS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_PHOTOS_SUCCESS:
      return {
        ...state,
        loading: false,
        photos: action.payload,
      };
    case FETCH_PHOTOS_REJECT:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
