import React, { Component } from 'react'
import { getApi } from '../JS/F_09_10_Api'
import axios from 'axios'

export default class C_18_10_Api1 extends Component {
    constructor(){
        super()
        this.state = {
            obj : {},
            array : [],
            emptyObj : {}

        }
    }
    axasdy = async () => {
        let a = await getApi()
        this.setState({array : [...a]})
   }
    saveData = (e) => {
        if(e.target.type == 'checkbox')
        {
            this.state.obj[e.target.name] = this.state.obj[e.target.name] ?? []
            this.state.emptyObj[e.target.name] = []
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
            this.state.obj[e.target.name] = e.target.value
            this.state.emptyObj[e.target.name] = ''
        }
     
        // this.state.emptyObj({...this.state.emptyObj})
        this.setState({emptyObj :{...this.state.emptyObj}})
        console.log(this.state.obj);
    }
    addApi = () => {
        if(this.state.obj._id)
        {
            this.state.obj.id = this.state.obj._id
            axios.post('https://student-api.mycodelibraries.com/api/student/update',this.state.obj).then((res) => {
                this.axasdy()
            })
        }
        else{
            axios.post('https://student-api.mycodelibraries.com/api/student/add',this.state.obj).then((res) => {
                this.axasdy()
            })
        }
        // this.state.array([...this.state.obj])
        // this.state.obj({...this.state.emptyObj})
        this.setState({obj :{...this.state.emptyObj}})
   }
    apiDelete = (id) =>{
        axios.delete('https://student-api.mycodelibraries.com/api/student/delete?id='+id).then((res)=>{
            this.axasdy()
            })
   }
    apiEdit = (x) => {
        this.setState({obj: {...x}})
        // this.setobj({...x})
   }
    
  render() {
    return (
        <>
        <h1 className='text-center'>API</h1>
        <div className='text-center'>
            <button type='button' className='btn btn-info mx-5' onClick={this.axasdy}>Get</button>
            <button type='button' className='btn btn-dark mx-5' onClick={this.addApi}>Add</button>
            {/* <button type='button' className='btn btn-danger mx-5' onClick={deleteApi}>Get</button> */}
        </div>

        <form action="" className='form w-50 mx-auto mt-4'> 
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">First Name</label>
                <input type="text" className="form-control" name='firstName' value={this.state.obj.firstName}  onChange={(e) =>this.saveData(e)} id="exampleInputEmail1" aria-describedby="emailHelp"/>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Last Name</label>
                <input type="text" className="form-control" name='lastName'  onChange={(e) =>this.saveData(e)}  value={this.state.obj.lastName} id="exampleInputPassword1"/>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInput" className="form-label">Age</label>
                <input type="number" className="form-control" name='age'  onChange={(e) =>this.saveData(e)}  value={this.state.obj.age} id="exampleInput"/>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputc" className="form-label">City</label>
                <input type="text" className="form-control" name='city'  onChange={(e) =>this.saveData(e)}  value={this.state.obj.city} id="exampleInputc"/>
            </div>

            <div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" checked={this.state.obj.gender == 'Male'} type="radio" name="gender" onChange={this.saveData} id="inlineRadio1" value="Male"/>
                    <label className="form-check-label" htmlFor="inlineRadio1">Male</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" checked={this.state.obj.gender == 'Female'} type="radio" name="gender" onChange={this.saveData} id="inlineRadio2" value="Female"/>
                    <label className="form-check-label" htmlFor="inlineRadio2">Female</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" checked={this.state.obj.gender == 'Other'} type="radio" name="gender" onChange={this.saveData} id="inlineRadio3" value="Other" />
                    <label className="form-check-label" htmlFor="inlineRadio3">Other</label>
                </div>
            </div>

            <label htmlFor="" className="form-label">Hobbies</label>
            <div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="checkbox" checked={this.state.obj.hobbies?.includes('Reading')}   name='hobbies' onChange={this.saveData} id="inlineCheckbox1" value="Reading"/>
                    <label className="form-check-label" htmlFor="inlineCheckbox1">Reading</label>
                </div>
                    <div className="form-check form-check-inline">
                    <input className="form-check-input" type="checkbox"  checked={this.state.obj.hobbies?.includes('Swimming')} name='hobbies' onChange={this.saveData} id="inlineCheckbox2" value="Swimming"/>
                    <label className="form-check-label" htmlFor="inlineCheckbox2">Swimming</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="checkbox"  checked={this.state.obj.hobbies?.includes('Dancing')} name='hobbies' onChange={this.saveData} id="inlineCheckbox3" value="Dancing" />
                    <label className="form-check-label" htmlFor="inlineCheckbox3">Dancing</label>
                </div>
            </div>
            <button type="button" onClick={() => this.addApi()} className="btn btn-primary">Submit</button>
        </form>

        <table className='table w-50 mx-auto'>
            <thead>
                <tr>
                    <th>FirstName</th>
                    <th>LastName</th>
                    <th>City</th>
                    <th>Age</th>
                    <th>Gender</th>
                    <th>Hobbies</th>
                    <th  >Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    this.state.array.map((x,i) =>{
                        return(
                            <tr key={i}>
                                <td>{x.firstName}</td>
                                <td>{x.lastName}</td>
                                <td>{x.city}</td>
                                <td>{x.age}</td>
                                <td>{x.gender}</td>
                                <td>{x.hobbies?.join(',')}</td>
                                <td >
                                    <button className='btn btn-danger' onClick={() => this.apiDelete(x._id)}>Delete</button>
                                    {/* <button className='btn btn-warning mx-2' onClick={() => apiEdit(x._id)}>Edit</button> */}
                                    <button className='btn btn-warning ' onClick={() => this.apiEdit(x)}>Edit</button>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </>
    )
  }
}
