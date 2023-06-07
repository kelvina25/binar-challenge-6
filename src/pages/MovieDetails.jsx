import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovieDetails } from "../redux/actions/movie";
import { Image } from "react-bootstrap";

const MovieDetails = ({ match }) => {
  const dispatch = useDispatch();
  const movieDetails = useSelector((state) => state.movie.movieDetails);

  useEffect(() => {
    dispatch(getMovieDetails(match.params.id));
  }, [dispatch, match.params.id]);

  return (
    <div>
      <Image src={movieDetails.backdrop_path} alt={movieDetails?.title} />
      <h2>{movieDetails?.title}</h2>
      <p>{movieDetails?.description}</p>
      {/* Display other details of the movie */}
    </div>
  );
};

export default MovieDetails;
