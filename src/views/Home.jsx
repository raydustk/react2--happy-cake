import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Home = () => {
  return (
    <Container fluid className="min-vh-100 d-flex align-items-center justify-content-center">
      <Row className="w-100">
        <Col md={12} className="text-center">      
          <h1>Bienvenido a Happy Cake</h1>
          <h5>El lugar de los pasteles felices</h5>
          <h1>🎂</h1>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;