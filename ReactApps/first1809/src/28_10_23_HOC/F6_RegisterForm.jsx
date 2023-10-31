import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const F6_RegisterForm = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        name: '',
        gender: 'male', // Default value
      });
    
        const [obj, setobj] = useState({})
        const [arr, setarr] = useState(JSON.parse(localStorage.getItem('arr')) || [])


      const getData = (e) =>{
        obj[e.target.name] = e.target.value
        setobj({...obj}) 
      } 

      let navigate = useNavigate()
      const saveData = () =>{
        arr.push(obj)
        setarr([...arr])
        localStorage.setItem('arr', JSON.stringify(arr))
        navigate('/login')
      }

  
      const handleSubmit = (e) => {
        e.preventDefault();
        // You can handle form submission here, e.g., send the data to an API.
        console.log(formData);
      };
    
      return (
        <Container className='mt-4'>
          <Row>
            <Col md={{ span: 6, offset: 3 }}>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    // value={formData.email}
                    onChange={getData}
                    required
                  />
                </Form.Group>
    
                <Form.Group controlId="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    // value={formData.password}
                    onChange={getData}
                    required
                  />
                </Form.Group>
    
                <Form.Group controlId="name">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    // value={formData.name}
                    onChange={getData}
                    required
                  />
                </Form.Group>
    
                <Form.Group controlId="gender">
                  <Form.Label>Gender</Form.Label>
                  <Form.Control
                    as="select"
                    name="gender"
                    // value={formData.gender}
                    onChange={getData}
                  >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </Form.Control>
                </Form.Group>
    
                <Button className='mt-3 btn ' onClick={saveData} variant="primary" type="submit">
                  Register
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      );
    
}

export default F6_RegisterForm