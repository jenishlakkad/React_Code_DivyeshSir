import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function F_23_10_NevigationBar() {

 
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
                    <Link className='btn m-2 text-bg-light' to='/F_23_10_Routing2'>Routing 2</Link>
                    <Link className='btn m-2 text-bg-light' to='/F_23_10_Routing3'>Routing 3</Link>
                    <Link className='btn m-2 text-bg-light' to='/F_23_10_Routing4'>Routing 4</Link>
                    <Link className='btn m-2 text-bg-light' to='/F_23_10_Form'>Form</Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar> 
    </>
    
  );
}

export default F_23_10_NevigationBar;
 