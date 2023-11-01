import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Toast } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import InputGroup from 'react-bootstrap/InputGroup';

const F6_RegisterForm = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        name: '',
        gender: 'male', // Default value
      });
      const [email, setEmail] = useState('');

      const [obj, setobj] = useState({})
      const [arr, setarr] = useState( JSON.parse(localStorage.getItem('arr')) ??[])
  
      const getData = (e) =>{
        obj[e.target.name] = e.target.value
        setobj({...obj})
        console.log(obj)
      }

      const emptyLocalHost = () =>{
        arr.splice(2,arr.length-1)
        localStorage.setItem('arr',JSON.stringify(arr))
      }

      const handleEmailChange = (e) => {
        let z = e.target.value
        setEmail(z);
        console.log(email)
        // console.log(obj.email)
      }; 

      let navigate = useNavigate()
      const saveData = () =>{
        let chkObj = arr.find((x) => x.email === obj.email)
        // console.log(chkObj) 
        if(chkObj){
          // console.log('true')
          alert('User Already exist')
        }
        else{
          // console.log('false')
          arr.push(obj)
          setarr([...arr])
          localStorage.setItem('arr',JSON.stringify(arr))
          navigate('/login')
        } 
      }
         
        
   
      return (
        <Container className='mt-4'>
          <Row>
            <Col md={{ span: 6, offset: 3 }}>
              <Form >
                <Form.Group controlId="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={obj.email}
                    onChange={(e) =>{getData(e); handleEmailChange(e)}}
                    // onChange={(e) =>{  handleEmailChange(e)}}
                    // onChange={getData}
                    required
                  />
                </Form.Group>
    
                <Form.Group controlId="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    value={obj.password}
                    onChange={getData}
                    required
                  />
                </Form.Group>
    
                <Form.Group controlId="name">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={obj.name}
                    onChange={getData}
                    required
                  />
                </Form.Group>
    
                <Form.Group>
        <Form.Label>Gender</Form.Label>
        <InputGroup>
          <div key="gender-radio" className="mb-3">
            <Form.Check
              inline
              label="Male"
              type="radio"
              id="male"
              value="male"
              // checked={gender === 'male'}
              name='gender'
              onChange={getData}
            />
            <Form.Check
              inline
              label="Female"
              type="radio"
              id="female"
              value="female"
              name='gender'
              // checked={gender === 'female'}
              onChange={getData}
            />
            <Form.Check
              inline
              label="Other"
              type="radio"
              id="other"
              value="other"
              name='gender'
              // checked={gender === 'other'}
              onChange={getData}
            />
          </div>
        </InputGroup>
      </Form.Group>
    
                <Button type='button' className='mt-3 btn ' onClick={saveData} variant="primary"  >
                  Register
                </Button>
                 
              </Form>
            </Col>
          </Row>
        </Container>
      );
    
}

export default F6_RegisterForm