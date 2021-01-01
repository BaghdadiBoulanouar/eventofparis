import React from 'react';

import axios from 'axios';
import {
  Container,
  Row,
  Card,
  Button,
} from 'react-bootstrap';

export default class Events extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
    };
  }

  componentDidMount() {
    axios.get('https://opendata.paris.fr/api/records/1.0/search/?dataset=que-faire-a-paris-')
      .then((res) => {
        const events = res.data.records.map(({ fields }) => ({
          title: fields.title,
          id: fields.id,
          lead_text: fields.lead_text,
          cover: fields.cover_url,
          price_detail: fields.price_detail,
        }));
        this.setState({ events });
      });
  }

  render() {
    const { events } = this.state;
    return (
      <Container>
        <Row>
          { events.map((event) => (
            <Card style={{ width: '18rem', margin: '1rem' }}>
              <Card.Img variant="top" src={event.cover} />
              <Card.Body>
                <Card.Title>{event.title}</Card.Title>
                <Card.Text>
                  {event.lead_text}
                </Card.Text>
                <Button variant="primary">Découvrir</Button>
              </Card.Body>
            </Card>
          ))}
        </Row>
      </Container>
    );
  }
}
