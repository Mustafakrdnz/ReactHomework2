import React from 'react';
import { Col, Card, CardImg, CardBody, CardTitle, CardText, Button } from 'reactstrap';

const Product = ({ product }) => {
  return (
    <Col md="6" className="mb-4">
      <Card>
        <CardImg top 
          width="100%" 
          src={product.imageUrl} 
          alt={product.name} 
          style={{ height: '200px', objectFit: 'cover' }}/>
        <CardBody>
          <CardTitle tag="h5">{product.name}</CardTitle>
          <CardText>{product.description}</CardText>
          <Button color="primary">View Details</Button>
        </CardBody>
      </Card>
    </Col>
  );
};

export default Product;
