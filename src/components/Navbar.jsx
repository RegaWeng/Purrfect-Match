import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../images/icon.png';
import './Navbar.css';
import './Services';

const MyNavbar = () => {
  return (
    <Navbar expand="lg" className="navbarFluid">
      <Container fluid>
        <Navbar.Brand href="home" className="navbarBrand">
          <img 
            src={logo} 
            width="50" 
            height="50" 
            className="d-inline-block align-top" 
            alt="Purrfect Match logo" 
          />
          Purrfect Match
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
          <Nav className="mx-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/CatRange">Cat Range</Nav.Link>
            <Nav.Link as={Link} to="/Services">Our Services</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
            </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
