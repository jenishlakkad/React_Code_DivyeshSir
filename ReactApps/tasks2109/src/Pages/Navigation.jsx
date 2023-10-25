// Date:-23/10/23
// Day:- Monday
// Topic:- Routing Navigation Page
import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom'
const Navigation = () => {
  return (
    <>
       <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            {/* <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link> */}

            <Link  className='btn text-decoration-none text-body' to='Home'>Home</Link>
            <Link className='btn text-decoration-none text-body' to='Form'>Form</Link>
            <Link className='btn text-decoration-none text-body' to='Table'>Table</Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
       
    </>
  )
}

export default Navigation