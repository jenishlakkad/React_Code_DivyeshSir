import React, { Component } from "react";
import { Button, Modal } from "react-bootstrap";
// import Button from 'react-bootstrap/Button';
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import Form2 from "./Form2";
// import * as formik from "formik";
// import * as yup from "yup";

export default class FormHedlingClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
        obj : {},
        array :[],
        editObj : {},
        count : 0,
      show: false
    };
  }

  handleClose = () => {this.setState({ show: false });};
  handleShow = () => {this.setState({ show: true });};

  getData = (e) => {
    if(e.target.type = 'checkbox')
    {
        this.state.obj[e.target.name] = this.state.obj[e.target.name] ?? []
        // this.state.blankObj[e.target.name] = []
        if(e.target.checked)
        {
            this.state.obj[e.target.name].push(e.target.value)
        }
        else
        {
            this.state.obj[e.target.name] = this.state.obj[e.target.name].filter(x => x != e.target.value)
        }
    }
    else
    {
        this.state.obj[e.target.name]  = e.target.value
        // this.state.blankObj[e.target.name] = []

    }
   console.log(this.state.obj);
   this.setState({...this.state})
  }

  saveData = () => {
    if ( this.state.obj.id == undefined)
    {
        this.state.count = this.state.count+1;
        this.state.obj.id = this.state.count;
        this.state.array.push(this.state.obj)
    }
    else{
        let index = this.state.array.findIndex(x => x.id == this.state.obj.id)
        this.state.array.splice(index , 1, this.state.obj)
    }
    this.state.obj = {...this.state.blankObj};
    this.setState({...this.state})
    console.log(this.state.obj);
  }

  editData = (id) => {
    let editObj = this.state.array.find(x => x.id == id)
    this.state.obj = editObj;
    this.setState({...this.state})
}

deleteData = (id) => {
    let index = this.state.array.findIndex(x => x.id == id)
    this.state.array.splice(index , 1)
    this.setState({...this.state})
}


  render() {
    const { show } = this.state;

    return (
      <>
        <Button className="" variant="primary" onClick={this.handleShow}>
          Registration Form
        </Button>

        <Modal show={show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <form>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" value={this.state.obj.name } onChange={this.getData} name="name" className="form-control" id="exampleInputPassword1"/>
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" name="email" value={this.state.obj.email } onChange={this.getData} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3 form-check">

                <label>Hobby</label> <br />
                <input type="checkbox" name="hobby" value='Reading' onChange={this.getData} checked={this.state.obj.hobby?.includes('Reading') == true}/>Reading
                <input type="checkbox" name="hobby" value='Travelling' onChange={this.getData} checked={this.state.obj.hobby?.includes('Travelling') == true}/>Travelling
                <input type="checkbox" name="hobby" value='Sleeping' onChange={this.getData} checked={this.state.obj.hobby?.includes('Sleeping') == true}/>Sleeping
                <input type="checkbox" name="hobby" value='Playing' onChange={this.getData} checked={this.state.obj.hobby?.includes('Playing') == true}/>Playing <br />
                </div>


                <label>Gender</label> <br />
                <input type="radio" name="gender" value='Male' onChange={this.getData} checked={this.state.obj.gender == 'Male'} />Male
                <input type="radio" name="gender" value='Female' onChange={this.getData} checked={this.state.obj.gender == 'Female'}/>Female <br />
                {/* <button type="button" onClick={this.saveData} className="btn btn-primary">Submit</button> */}
            </form>
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


        <table>
            <thead>
                <tr>
                    <td>Password</td>
                    <td>Email</td>
                    <td>Hobbies</td>
                    <td>Gender</td>
                    <td>Action</td>
                </tr>
            </thead>
            <tbody>
                {
                  <Form2 arr = {this.state.array} edit= {this.editData} delete= {this.deleteData}/>
                }
            </tbody>
        </table>
      </>
    );
  }
}













 