import React from 'react';
import axios from 'axios';

import {
  Container,
  Form,
  Button,
  Card,
  Row,
} from 'react-bootstrap';

export default class EventForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
      value: '',
    };
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    const { value } = this.state;
    axios.get(`https://opendata.paris.fr/api/records/1.0/search/?dataset=que-faire-a-paris-&facet=category&facet=tags&facet=address_name&facet=address_zipcode&facet=address_city&facet=pmr&facet=blind&facet=deaf&facet=access_type&facet=price_type&q=${value}`)
      .then((res) => {
        const events = res.data.records.map(({ fields }) => ({
          title: fields.title,
          description: fields.lead_text,
          cover: fields.cover_url,
          id: fields.id,
        }));
        this.setState({ events });
      });
  }

  render() {
    const { events } = this.state;
    return (
      <Container>
        <Form>
          <Form.Control type="text" size="lg" placeholder="Rechercher un évènement par le nom" onChange={(e) => this.setState({ events, value: e.target.value })} />
          <Button style={{ width: '100%' }} variant="success" type="button" onClick={this.componentDidMount}>
            Rechercher
          </Button>
        </Form>
        <Row>
          {events.map((event) => (
            <Card style={{ width: '21rem', margin: '1vw' }} key={event.id}>
              <Card.Img variant="top" src={event.cover} />
              <Card.Body>
                <Card.Title>{event.title}</Card.Title>
                <Card.Text>{event.description}</Card.Text>
                <Button variant="success">Voir plus</Button>
              </Card.Body>
            </Card>
          ))}
        </Row>
      </Container>
    );
  }
}
