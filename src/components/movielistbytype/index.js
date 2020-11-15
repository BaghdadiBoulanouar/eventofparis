import React from 'react';
import {
  Button, Row, Card,
} from 'react-bootstrap';

const Movielistbytypes = ({ data, tag }) => (
  <div>
    <h3>{tag.toUpperCase()}</h3>
    <Row>
      {data.filter((element) => element.tags.includes(tag)).map((movie) => (
        <Card style={{ width: '10rem', margin: '1em' }}>
          <Card.Img variant="top" src={movie.poster_url} />
          <Card.Body>
            <Card.Title>{movie.name}</Card.Title>
            <Card.Text>
              {movie.description}
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      ))}
    </Row>
  </div>
);

export default Movielistbytypes;
