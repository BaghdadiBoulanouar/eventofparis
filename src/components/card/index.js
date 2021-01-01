import React from 'react';

import {
  Card,
  Button,
} from 'react-bootstrap';

const Cards = ({ event }) => (
  <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="holder.js/100px180" />
    <Card.Body>
      <Card.Title>{event.title}</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk of
        the cards content.
      </Card.Text>
      <Button variant="primary">Découvrir</Button>
    </Card.Body>
  </Card>
);

export default Cards;
