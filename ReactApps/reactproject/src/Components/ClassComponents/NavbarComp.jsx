 

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';

import React, { Component } from 'react'
import Button from 'react-bootstrap/esm/Button';
import logo from '../../Assets/Image/Logo.png';

export default class NavbarComp extends Component {
  render() {
    return (
      <>
        <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        {/* <Navbar.Brand href="#home"><img  src={logo}  style={{opacity:'transparent' ,color:'black'}} alt="" />  dsf</Navbar.Brand> */}
        <Navbar.Brand href="#home"><img src={logo} style={{width:'150px'}} alt="" /> </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto   " style={{width:'80%'}} >
            <Nav.Link href="#home"className="  mx-2"><h5>Auction</h5></Nav.Link>
            <Nav.Link href="#about"className="  mx-2" ><h5>Sell a Car</h5></Nav.Link>
            <Form className="d-flex w-75">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2 mx-2"
              aria-label="Search"
            />
            <Button variant="outline-success" className="  mx-2">Search</Button>
          </Form>
            {/* <Nav.Link href="#contact">Contact Us</Nav.Link> */}
          </Nav>
          <Button variant="outline-light" className="ms-auto">Sign In</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      </>
    )
  }
}
