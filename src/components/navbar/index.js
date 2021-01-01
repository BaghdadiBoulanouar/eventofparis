import React from 'react';

import {
  Container,
  Navbar,
} from 'react-bootstrap';

const NavBar = () => (
  <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand className="text-center" style={{ width: '100%' }}>Moteur de recherche des événements de Paris</Navbar.Brand>
    </Container>
  </Navbar>
);

export default NavBar;
