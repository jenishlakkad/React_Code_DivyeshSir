 import React, { Component } from 'react'
 import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import ClassFormBack from './ClassFormBack';
 
 export default class ClassForm extends Component {
    constructor(){
        super()
        this.state = {
            obj : {},
            // array : [],
            array : JSON.parse(localStorage.getItem('array')) ?? [],
            blankObj : {},
            count : JSON.parse(localStorage.getItem('count')) ?? 0,
            show : false,
            validated : false
        }

    }

     handleClose = () =>{ this.setState({show : false}); }
     handleShow = () =>{this.setState({show : true}); }

     handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
    
        // setValidated(true);
        this.setState({validated : true})
      };

      getData = (e) => {
        if(e.target.type == 'checkbox')
        {
            this.state.obj[e.target.name] = this.state.obj[e.target.name] ?? []
            this.state.blankObj = []
            if(e.target.checked){
                this.state.obj[e.target.name].push(e.target.value)
            }
            else{
                // this.state.obj[e.target.name] = this.state.obj[e.target.name].filter(x => x != e.target.value)
                this.state.obj[e.target.name] = this.state.obj[e.target.name].filter(x => x != e.target.value)
            }
        }
        else{
            this.state.obj[e.target.name] = e.target.value
            this.state.blankObj[e.target.name] = ' '
        }
        this.setState({...this.state})
        
        // console.log(this.state.obj);
      }
      
      saveData = () =>{
        if(this.state.obj.id == undefined)
        {
            this.state.count++
            this.state.obj.id = this.state.count
            this.state.array.push(this.state.obj)
            localStorage.setItem('count',JSON.stringify(this.state.count))
        }
        else
        {
            let index = this.state.array.findIndex(x => x.id == this.state.obj.id)
            this.state.array.splice(index, 1, this.state.obj)
        }
        this.state.obj = {...this.state.blankObj}
        this.setState({...this.state})
        localStorage.setItem('array',JSON.stringify(this.state.array))
        console.log(this.state.array);
      }
      editUser = (id) => {
        this.state.show = true
        let editObj = this.state.array.find(x => x.id == id)
        this.state.obj = {...editObj}
        this.setState({...this.state})

          console.log('Edit is working');
      }
      deleteUser = (id) => {
        let index = this.state.array.findIndex(x => x.id == id)
        this.state.array.splice(index,1)
        this.setState({...this.state})
      }
   render() {
     return (
        <>
        <Button variant="primary" className='my-5' onClick={this.handleShow}>
          Launch demo modal
        </Button>
        
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
                    <Form noValidate validated={this.state.validated} onSubmit={this.handleSubmit}>
                <Row className="mb-3">
                    <Form.Group as={Col} md="4" controlId="validationCustom01">
                    <Form.Label>First name</Form.Label>
                    <Form.Control
                        required
                        type="text" name='name'
                        value={this.state.obj.name ?? ' '}
                        placeholder="First name"
                        defaultValue="Mark"   onChange={this.getData}
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="validationCustom02">
                    <Form.Label>Last name</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        name='lastName'
                        value={this.state.obj.lastName ?? ' '}
                        placeholder="Last name" onChange={this.getData}
                        defaultValue="Otto"
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    {/* <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                    <Form.Label>Username</Form.Label>
                    <InputGroup hasValidation>
                        <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                        <Form.Control
                        type="text"
                        placeholder="Username"

                        aria-describedby="inputGroupPrepend"
                        required
                        />
                        <Form.Control.Feedback type="invalid">
                        Please choose a username.
                        </Form.Control.Feedback>
                    </InputGroup>
                    </Form.Group> */}
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} md="6" controlId="validationCustom03">
                    <Form.Label>City</Form.Label>
                    <Form.Control type="text" placeholder="City" value={this.state.obj.city ?? ' '} name='city'  onChange={this.getData} required />
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid city.
                    </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="3" controlId="validationCustom04">
                    <Form.Label>State</Form.Label>
                    <Form.Control type="text" placeholder="State" value={this.state.obj.state ?? ' '} name='state' onChange={this.getData} required />
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid state.
                    </Form.Control.Feedback>
                    </Form.Group>
                    {/* <Form.Group as={Col} md="3" controlId="validationCustom05">
                    <Form.Label>Zip</Form.Label>
                    <Form.Control type="text" placeholder="Zip" required />
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid zip.
                    </Form.Control.Feedback>
                    </Form.Group> */}
                </Row>
                {/* <Form.Group className="mb-3">
                    <Form.Check
                    required
                    label="Agree to terms and conditions"
                    feedback="You must agree before submitting."
                    feedbackType="invalid"
                    />
                </Form.Group> */}
{/* 
                        {['checkbox', 'radio'].map((type) => (
                <div key={`inline-${type}`} className="mb-3"> */}
                <Form.Label>Hobbies</Form.Label><br />
                <Form.Check
                    inline
                    label="Dance"
                    checked={this.state.obj.hobbies?.includes('Dance') }
                    value='Dance'
                    name="hobbies"
                    type="checkbox"  onChange={this.getData}
                />
                <Form.Check
                    inline
                    label="Reading"
                    checked={this.state.obj.hobbies?.includes('Reading') }
                    value='Reading'
                    name="hobbies"
                    type="checkbox"  onChange={this.getData}
                />
                <Form.Check
                    inline
                    label="Coding"
                    checked={this.state.obj.hobbies?.includes('Coding')}
                    value='Coding'
                    name="hobbies"
                    type="checkbox"   onChange={this.getData}
                />
                <br />
    {/* ############################# */}

                <Form.Label>Gender</Form.Label><br />
                <Form.Check
                    inline
                    label="Male"
                    name="gender"   onChange={this.getData}
                    checked={this.state.obj.gender == 'Male'} 
                    value='Male'
                    type='radio'
                />
                <Form.Check
                    inline
                    label="Female"
                    name="gender"  onChange={this.getData}
                    checked={this.state.obj.gender == 'Female'}
                    value='Female'
                    type='radio'
                />
                <Form.Check
                    inline
                    label="Other"
                    type='radio'   onChange={this.getData}
                    checked={this.state.obj.gender == 'Other'}      
                    value='Female'
                    name="gender"
                />
                {/* </div>
             ))} */}

                {/* <Button type="submit">Submit form</Button> */}
                </Form>

          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={this.saveData}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>

        {/* {this.state.obj.name} */}

        <table className='table w-75 mx-auto'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Last Name</th>
                    <th>Gender</th>
                    <th>Hobbies</th>
                    <th>City</th>
                    <th>State</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    this.state.array?.map((x,i) =>{
                        return(
                        <ClassFormBack obj ={x} key1={i} edit = {() => this.editUser(x.id)} dele= {() => this.deleteUser(x.id)}/>
                        )
                    })
                }
            </tbody>
        </table>
      </>
     )
   }
 }
 