import React from 'react';
import { Row } from 'reactstrap';
import Product from './Product';

const Content = ({ products }) => {
  return (
    <div>
      <h2>Products</h2>
      <Row>
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </Row>
    </div>
  );
};

export default Content;
