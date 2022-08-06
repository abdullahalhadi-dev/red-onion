import React from 'react';
import './Navbar.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import logo from '../../images/logo.png';
import { Link } from 'react-router-dom';

function Header() {

  return (
    <>
      <Navbar style={{height: '90px', fontSize: '20px'}}>
      <Container>
        <Navbar.Brand href="#home"><img style={{width: '80px', height: '25px', fontSize: '30px'}} src={logo} alt='site logo' /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link as={Link} to="about">About</Nav.Link>
            <Nav.Link as={Link} to="services">Services</Nav.Link>
            <Nav.Link as={Link} to="contact">Contact</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="login">Log in</Nav.Link>
            <Nav.Link as={Link} to='signup'>Sign up</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Header;