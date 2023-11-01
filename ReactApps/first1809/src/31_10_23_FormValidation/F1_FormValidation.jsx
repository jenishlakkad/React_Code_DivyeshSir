import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import validationData from './ValidationData.json'

const F1_FormValidation = () => {
    const [obj, setobj] = useState({
        name: '',
        lastName: '',
        email: '',
        password: '',
        gender: '',
        hobbies: '',
        city: '',
      });
    const [blankObj, setblankObj] = useState({hobby:[]})
    let [count,setcount] = useState(0)
    const [errorMsg, seterrorMsg] = useState({})
    let checkAlphabet = /^[A-Za-z\s]^$/
    let checkOnlyNumber = /^\d+$/

      const capitalize = (value) => {
        let strArr = value.split(' ')
        strArr.forEach((x,i) => {
            strArr[i] = x.charAt(0).toUpperCase() + x.substring(1)
        })
        return strArr.join(' ')
      }

      let [arr,setarr] = useState([])
      const getFormData = async (e) =>{
        if(e.target.type == 'checkbox'){
            if(e.target.checkd){
                obj.hobby.push(e.target.value)
            }else{
                obj.hobby = obj.hobby.filter(x => x !== e.target.value)
            }
            blankObj[e.target.name]= []
        }
        else if(e.target.name == 'information'){
            obj[e.target.name] = capitalize(e.target.value)
        }
        else{
            obj[e.target.name] = e.target.value;
            blankObj[e.target.name] = '';
        }
        setobj({...obj})
        setblankObj({...blankObj})
        validationFunction(e.target.name)
        console.log(obj)
      }

      const validationFunction = (name) => {
        // let validationObj = validationData.find(x => x.name == name)
        // let validObj = validationObj.conditions.find(x => {
        //     if(eval(x.condition)){
        //         return true
        //     }
        // })
        // if(validObj){
        //     errorMsg[name] = validObj.error
        // }
        // else{
        //     delete errorMsg[name]
        // }
        // seterrorMsg({...errorMsg})
      }

      const Save = () =>{
        console.log(obj)
      }

      const openForm = () =>{
        // setformHeight(false)
      }

      const closeForm = () => {
        // setformHeight(true)
      }
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setobj({ ...obj, [name]: value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log(obj); // You can replace this with your desired form submission logic.
      };
    
      return (
        <Container >
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col>
                <Form.Group>
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={obj.name}
                    onChange={getFormData}
                  />
                  <span className='error_msg'>{errorMsg?.name}</span>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group>
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="lastName"
                    value={obj.lastName}
                    onChange={getFormData}
                  />
                   <span className='error_msg'>{errorMsg?.lastName}</span>
                </Form.Group>
              </Col>
            </Row>
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={obj.email}
                onChange={getFormData}
              />
               <span className='error_msg'>{errorMsg?.email}</span>
            </Form.Group>
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={obj.password}
                onChange={getFormData}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Gender</Form.Label>
              <Form.Control
                as="select"
                name="gender"
                value={obj.gender}
                onChange={getFormData}
              >
                <option value="">Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>Hobbies</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="hobbies"
                value={obj.hobbies}
                onChange={getFormData}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>City</Form.Label>
              <Form.Control
                type="text"
                name="city"
                value={obj.city}
                onChange={getFormData}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Container>
      );
}

export default F1_FormValidation