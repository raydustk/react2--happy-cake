import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <Navbar style={{ backgroundColor: '#dc3545' }} variant="dark" expand="lg" sticky="top">
      <Nav className="me-auto">
        <Nav.Link as={NavLink} to="/" className="text-white" style={{ marginLeft: 40, textDecoration: 'none', color: 'white', fontSize: '20px' }}>🏡 Home </Nav.Link>
        <Nav.Link as={NavLink} to="/contacto" className="text-white" style={{ marginLeft: 40,textDecoration: 'none', color: 'white', fontSize: '20px' }}>📒 Contacto</Nav.Link>        
        <Navbar.Brand as={NavLink} to="/" className="ms-auto text-white"  style={{ marginLeft: '100vh', textDecoration: 'none', color: 'white', fontSize: '30px' }}>
        Happy Cake 🍰
      </Navbar.Brand>
      </Nav>

    </Navbar>
  );
};

export default Navigation;