import React from 'react';
import { Card, CardBody, CardTitle, ListGroup, ListGroupItem } from 'reactstrap';

const Categories = ({ categories }) => {
  return (
    <Card>
      <CardBody>
        <CardTitle tag="h5">Categories</CardTitle>
        <ListGroup>
          {categories.map((category, index) => (
            <ListGroupItem key={index}>{category}</ListGroupItem>
          ))}
        </ListGroup>
      </CardBody>
    </Card>
  );
};

export default Categories;
