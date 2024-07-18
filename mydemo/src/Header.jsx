// import React from 'react';
// import Container from 'react-bootstrap/Container';

// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';


import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
  return (
    <Navbar expand="lg" className="bg">
      <Container fluid="lg">
        <Row>
          <Col xs={10} sm={10} md={10} lg={11} >
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand></Col>

        <Col  xs={2} sm={2} md={2} lg={1}>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">HOME</Nav.Link>
            <Nav.Link href="#link">ABOUT US</Nav.Link>
            <Nav.Link href="#link">PROGRAM</Nav.Link>
            <Nav.Link href="#link">CONTACT US</Nav.Link>
           
          </Nav>
        </Navbar.Collapse>
        </Col>
        </Row>
      </Container>
    </Navbar>
  );
}

export default Header;