import { Row, Col, Card, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import { getMovie } from '../redux/actions/movie';
import Slider from "../components/Slider";




function MovieCard() {



    const dispatch = useDispatch();

    // useSelector -> to access the global state (redux)
    const { movie } = useSelector((state) => state.movie);

    useEffect(() => {
        dispatch(getMovie());
    }, [dispatch]);

    return (
        <>
            <Slider />
            <Container>
                <div style={{ display: "block", marginLeft: "20px", marginRight: "auto" }}>
                    <div>
                        <h1>Movie</h1>
                    </div>
                    <Row xs={1} md={2} className="grid gap-3 ">
                        {
                            movie.map((movie, i) => (

                                <Card style={{ width: '15rem' }} key={movie.id} >
                                    <Link to={`/detail/${movie.id}`}>
                                        <Card.Img variant="top" src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`} />
                                        <Card.Body>
                                            <Card.Title>{movie?.original_title}</Card.Title>
                                        </Card.Body>
                                    </Link>
                                </Card>
                            ))}
                    </Row>
                </div>

            </Container>
        </>



    );
}

export default MovieCard; 