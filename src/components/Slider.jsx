import Header from './Header';
import { useDispatch, useSelector } from "react-redux";
import Carousel from 'react-bootstrap/Carousel';
import { getMovie } from '../redux/actions/movie';
import React, { useEffect } from "react";
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

function Slider() {

  // To set the state of the store
  const dispatch = useDispatch();

  // Access the store
  const { movie } = useSelector((state) => state.movie);

  useEffect(() => {
    dispatch(getMovie());
  }, [dispatch]);

  return (
    <>
      <Carousel fade>
        {movie.slice(0, 3).map((movie) => (
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3> {movie.title}</h3>
              <p style={{fontFamily:'Arial, Helvetica, sans-serif'}}> {movie.overview}</p>
              <Button  style={{color: 'red', backgroundColor:'white', borderRadius: '20px', width:'250px'}}>
                Watch Now
              </Button>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
}

export default Slider;