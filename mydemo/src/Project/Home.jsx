import React from 'react';
import { Navbar, Nav, Container, Button, Row, Col, Card } from 'react-bootstrap';
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import data from './Navbar.json'; 

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="Home">
      {/* Navbar Section */}
      <Navbar expand="md" className="navbar-custom">
        <Container>
          <Navbar.Brand id='Brand'>{data.brand}</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="ml-auto">
              {data.navLinks.map((item) => (
                <Nav.Link href={item.link}  key={item.id}
                  className={`nav-link-custom ${item.active ? 'active' : ''}`}  >
                  {item.name}</Nav.Link>
              ))}
              <Nav.Link href={data.icons[0].link}>
                <FaUserAlt />
              </Nav.Link>
              <Nav.Link href={data.icons[1].link}>
                <MdOutlineShoppingCart />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Header Section */}
      <header className="header-section">
        <Container>
          <Row className="align-items-center">
            <Col xs={12} md={6}>
              <h1 className="header-title">{data.header.title}</h1>
              <p className="header-subtitle">{data.header.subtitle}</p>
              {data.header.buttons.map((button) => (
                <Button
                  key={button.id}
                  className={`btn-${button.style} mr-2`}
                  onClick={() => navigate(button.link)}
                >
                  {button.name}
                </Button>
              ))}
            </Col>
            <Col xs={12} md={6} className="text-center">
              <img  src={require(`${data.image.src}`).default}
                alt={data.image.alt} className="img-fluid" />
            </Col>
          </Row>
        </Container>
      </header>

      {/* Product Section */}
      <section className="product-section py-5">
        <Container>
          <Row>
            <Col xs={12} md={6}>
              <h2 className="product-title">{data.productSection.title}</h2>
              <p className="product-description">{data.productSection.description}</p>
              <Button
                className={`btn-${data.productSection.button.style}`}
                onClick={() => navigate(data.productSection.button.link)}
              >
                {data.productSection.button.name}
              </Button>
            </Col>
            <Col xs={12} md={6}>
              <Row>
                {data.productSection.products.map((product) => (
                  <Col key={product.id} xs={12} md={4} className="text-center">
                    <Card className="border-0">
                      <Card.Img
                        variant="top"
                        src={require(`${product.image}`).default}
                        alt={product.alt}
                        className="img-fluid"
                      />
                      <Card.Body>
                        <Card.Title>{product.name}</Card.Title>
                        <Card.Text>{product.price}</Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Home;
