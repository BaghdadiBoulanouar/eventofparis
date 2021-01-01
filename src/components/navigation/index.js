import React from 'react';

import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
} from 'react-bootstrap';

const NavBar = () => (
  <Navbar bg="primary" variant="dark">
    <Navbar.Brand href="#home">Que faire à Paris ?</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Accueil</Nav.Link>
      <Nav.Link href="#features">Recherche avancé</Nav.Link>
      <Nav.Link href="#pricing">Contact</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Que faire ?" className="mr-sm-2" />
      <Button variant="outline-light">Recherche</Button>
    </Form>
  </Navbar>
);

export default NavBar;
