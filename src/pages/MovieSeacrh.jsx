import React, { useState, useSelector } from 'react';
import { useDispatch } from 'react-redux';
import { getMovieSearch } from '../redux/actions/movie';
import { Card, Row, Link } from 'react-bootstrap';
import { setMovieSearch } from '../redux/reducers/moviedata';

const MovieSeacrh = () => {
    const [keyword, setKeyword] = useState('');
    const dispatch = useDispatch();

    const handleSearch = (e) => {
        e.preventDefault();
        dispatch(getMovieSearch(keyword));
        setKeyword('');
    };

    return (
        <div className="container mt-4">
            <h2>Search Movie</h2>
            <form onSubmit={handleSearch}>
                <div className="input-group mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter keyword"
                        value={keyword}
                        onChange={(e) => setMovieSearch(e.target.value)}
                    />
                    <button className="btn btn-primary" type="submit">
                        Search
                    </button>
                </div>
            </form>
        </div>
    );
};

export default MovieSeacrh;
