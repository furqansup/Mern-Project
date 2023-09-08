import { combineReducers } from "redux";
import { postsReducer } from "./posts"; // Use named import for postsReducer

export default combineReducers({ posts: postsReducer }); // Specify the correct reducer key
