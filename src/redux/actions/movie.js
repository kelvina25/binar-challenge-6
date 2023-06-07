import axios from "axios";
import { toast } from "react-toastify";
import { setMovie, setMovieDetails, setMovieSearch} from "../reducers/moviedata"

export const getMovie = () => async (dispatch) => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_MOVIE_API}/v1/movie/popular?page=1`
    );
    dispatch(setMovie(response.data.data));
  } catch (error) {
    if (axios.isAxiosError(error)) {
      toast.error(error?.response?.data?.message);
      return;
    }
    toast.error(error?.message);
  }
};


export const getMovieDetails = (id) => async (dispatch) => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_MOVIE_API}/v1/movie/${id}`
    );
    dispatch(setMovieDetails(response.data.data));
  } catch (error) {
    if (axios.isAxiosError(error)) {
      toast.error(error?.response?.data?.message);
      return;
    }
    toast.error(error?.message);
  }
};


export const getMovieSearch = (keyword) => async (dispatch) => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_MOVIE_API}/v1/movie/search?keyword=${keyword}`
    );
    dispatch(setMovieSearch(response.data.data));
  } catch (error) {
    if (axios.isAxiosError(error)) {
      toast.error(error?.response?.data?.message);
      return;
    }
    toast.error(error?.message);
  }
};