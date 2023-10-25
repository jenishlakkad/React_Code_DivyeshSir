import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const NavBar_4 = () => {
  return (
    <>
         <Navbar expand="lg" className=" bg-dark text-white">
            <Container>
                <Navbar.Brand >React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    {/* <Nav.Link href="/Home">Home</Nav.Link>
                    <Nav.Link href="/">Link</Nav.Link> */}
                    <Link className='btn m-2 text-bg-light' to='AllUser'>AllUser</Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>
  )
}

export default NavBar_4