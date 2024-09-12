import {
  FETCH_USERS_SUCCESS,
  FETCH_USERS_REJECT,
  FETCH_USERS_REQUEST,
} from "./actionType";

const initialState = {
  users: [],
  loading: false,
  error: null,
};
export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload,
      };
    case FETCH_USERS_REJECT:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
