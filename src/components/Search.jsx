import { useState } from 'react';
import axios from 'axios';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';

function SearchMovie() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://km4-challenge-5-api.up.railway.app/api/search?q=${query}`
      );
      setMovies(response.data.results);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container>
      <Row className="mt-4">
        <Col>
          <h1>Search Movie</h1>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              placeholder="Search..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </Form.Group>
        </Col>
        <Col>
          <Button variant="primary" onClick={handleSearch}>
            Search
          </Button>
        </Col>
      </Row>
      <Row className="mt-4">
        {movies.map((movie) => (
          <Col key={movie.id} xs={12} sm={6} md={4} lg={3}>
            <Card>
              <Card.Img variant="top" src={movie.poster_path} />
              <Card.Body>
                <Card.Title>{movie.title}</Card.Title>
                <Card.Text>{movie.overview}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default SearchMovie;
