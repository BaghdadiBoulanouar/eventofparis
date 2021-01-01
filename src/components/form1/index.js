import React from 'react';

import {
  Container,
  Form,
  Col,
} from 'react-bootstrap';

const Form1 = () => (
  <Container>
    <Form>
      <Form.Row>
        <Col>
          <Form.Control placeholder="Rechercher un évènement par la date" />
        </Col>
        <Col>
          <Form.Control placeholder="Rechercher un évènement par le nom" />
        </Col>
      </Form.Row>
    </Form>
  </Container>
);

export default Form1;
