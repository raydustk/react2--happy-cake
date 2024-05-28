import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const Contacto = () => {
  return (
    <Container fluid className="min-vh-100 d-flex align-items-center justify-content-center">
      <Row>
        <Col md={6} className="mx-auto">
          <h1 className="text-center mb-4">Cuéntanos, ¿en qué te podemos ayudar?</h1>
          <Form>
            <Form.Group controlId="formBasicEmail" className="mb-3">
              <Form.Label>Correo:</Form.Label>
              <Form.Control type="email" placeholder="Ingresa tu correo" />
            </Form.Group>
            <Form.Group controlId="formBasicDescription" className="mb-3">
              <Form.Label>Descripción:</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Describe tu consulta" />
            </Form.Group>
            <div className="d-grid">
              <Button variant="primary" type="submit">
                Enviar
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Contacto;