import React from 'react';
import { Container, Row, Col, Nav, NavItem, NavLink } from 'reactstrap';

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col md="2">
            <img src="/vite.svg" alt="Logo" style={{ height: '40px' }} />
          </Col>
          <Col md="10">
            <Nav className="justify-content-end">
              <NavItem>
                <NavLink href="#">Privacy</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Contact</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Terms of Use</NavLink>
              </NavItem>
            </Nav>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
