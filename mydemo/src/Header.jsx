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
        <Col>
       
        <Navbar.Brand href="#home" id='logo-name'>React-Bootstrap</Navbar.Brand>   </Col>
        <Col>
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