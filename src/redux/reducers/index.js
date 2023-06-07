import { combineReducers } from "@reduxjs/toolkit";
import moviedata from "./moviedata";
import auth from "./auth";

export default combineReducers({
  movie: moviedata,
  auth,
});
