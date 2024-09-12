import {
  FETCH_TODOS_REQUEST,
  FETCH_TODOS_SUCCESS,
  FETCH_TODOS_REJECT,
  FETCH_USERS_REJECT,
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_ALBUMS_REJECT,
  FETCH_ALBUMS_REQUEST,
  FETCH_ALBUMS_SUCCESS,
  FETCH_PHOTOS_REJECT,
  FETCH_PHOTOS_SUCCESS,
  FETCH_PHOTOS_REQUEST,
} from "./actionType.js";
import axios from "axios";

//Fetching Users Data

export const fetchUsers = () => {
  return async (dispatch) => {
    dispatch({ type: FETCH_USERS_REQUEST });
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      dispatch({ type: FETCH_USERS_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: FETCH_USERS_REJECT, payload: error.message });
    }
  };
};

//Fetching Todos Data

export const fetchTodos = () => {
  return async (dispatch) => {
    dispatch({ type: FETCH_TODOS_REQUEST });

    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/todos"
      );
      dispatch({ type: FETCH_TODOS_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: FETCH_TODOS_REJECT, payload: error.message });
    }
  };
};

//Fetching Photos data
export const fetchPhotos = () => {
  return async (dispatch) => {
    dispatch({ type: FETCH_PHOTOS_REQUEST });
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/photos"
      );
      dispatch({ type: FETCH_PHOTOS_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: FETCH_PHOTOS_REJECT, payload: error.message });
    }
  };
};

//Fetching Album data

export const fetchAlbum   = () => {
  return async (dispatch) => {
    dispatch({ type: FETCH_ALBUMS_REQUEST });
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/albums"
      );
      dispatch({ type: FETCH_ALBUMS_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: FETCH_ALBUMS_REJECT, payload: error.message });
    }
  };
};
