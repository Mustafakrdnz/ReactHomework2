import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Categories from './Categories';
import Content from './Content';

const Body = () => {
  const categories = ['Category 1', 'Category 2', 'Category 3', 'Category 4'];
  const products = [
    { id: 1, name: 'Product 1', description: 'Description of Product 1', imageUrl: '/images/product1.jpeg'},
    { id: 2, name: 'Product 2', description: 'Description of Product 2', imageUrl: '/images/product2.jpg'},
    { id: 3, name: 'Product 3', description: 'Description of Product 3', imageUrl: '/images/product3.jpg' },
    { id: 4, name: 'Product 4', description: 'Description of Product 4', imageUrl: '/images/product4.jpg' },
  ];

  return (
    <Container className="my-5">
      <Row>
        <Col md="4">
          <Categories categories={categories} />
        </Col>
        <Col md="8">
          <Content products={products} />
        </Col>
      </Row>
    </Container>
  );
};

export default Body;
