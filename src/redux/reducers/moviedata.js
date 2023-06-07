import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    movie:[],
    movieDetails:null,
    movieSearch: [],
}

const moviedata = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setMovie: (state, action) => {
      state.movie = action.payload;
    },
    setMovieDetails: (state, action) => {
      state.movieDetails = action.payload
    },
    setMovieSearch: (state, action) => {
      state.movieSearch = action.payload;
    },
  },
});

export const {setMovie, setMovieDetails, setMovieSearch} =  moviedata.actions

export default moviedata.reducer


