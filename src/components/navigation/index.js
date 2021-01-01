import React from 'react';

import {
  Navbar,
  Nav,
} from 'react-bootstrap';

const NavBar = () => (
  <Navbar bg="success" variant="dark">
    <Navbar.Brand href="#home">Que faire à Paris ?</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Accueil</Nav.Link>
      <Nav.Link href="#features">Recherche avancé</Nav.Link>
      <Nav.Link href="#pricing">Contact</Nav.Link>
    </Nav>
  </Navbar>
);

export default NavBar;
