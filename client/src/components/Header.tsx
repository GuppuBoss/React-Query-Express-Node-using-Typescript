import React from 'react';
import { 
  Container, 
  Row,
  Col
} from 'react-bootstrap';

export const Header = () => {
  return (
    <Container fluid>
      <Row>
        <Col className="bg-danger p-3">
          <h1 className="text-center text-uppercase text-white mb-0">Calculator</h1>
        </Col>
      </Row>
    </Container>
  );
};