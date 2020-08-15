import React from 'react';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default function CatCard(props: Cat) {
  const { id, url } = props;
  return (
    <Col md={3} sm={6}>
      <Card style={{ marginBottom: '20px' }}>
        <Card.Img variant="top" src={url} />
        <Card.Body>
          <Button variant="primary" block href={id}>View details</Button>
        </Card.Body>
      </Card>
    </Col>
  )
}
