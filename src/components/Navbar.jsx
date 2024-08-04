import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from '../images/icon.png';
import './Navbar.css';

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
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/cat-range">Cat Range</Nav.Link>
            <Nav.Link href="/our-services">Our Services</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
