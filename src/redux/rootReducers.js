import { combineReducers } from "redux";
import { userReducer } from "./usersReduces.js";
import { photosReducers } from "./photosReducers.js";
import { albumReducers } from "./albumsReducers.js";
import { todosReducers } from "./todosReducer.js";

export const rootReducers = combineReducers({
  users: userReducer,
  photos: photosReducers,
  albums: albumReducers,
  todos: todosReducers,
});
