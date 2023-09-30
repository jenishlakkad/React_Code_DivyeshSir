

import React, { Component } from 'react'

export class FormHendelingClass309 extends Component {
  constructor(){
            super();
    
            this.state = {
                obj : {},
                count : 0,
                array : [],
                blankObj : {}
            }
        }
    
        getData = (e) => {
            if(e.target.type == 'checkbox'){
                this.state.obj[e.target.name] = this.state.obj[e.target.name] ?? [];
                this.state.blankObj[e.target.name] = []
                if(e.target.checked){
                    this.state.obj[e.target.name] = [...this.state.obj[e.target.name] , e.target.value]
                }else{
                    this.state.obj[e.target.name] = this.state.obj[e.target.name].filter(x => x != e.target.value)
                }
            }else{
                this.state.obj[e.target.name] = e.target.value;
                this.state.blankObj[e.target.name] = ''
            }
            // this.setState({obj : {...this.state.obj}})
            // this.setState({blankObj : {...this.state.blankObj}})
            this.setState({...this.state})
        }
        saveData = () => {
            if(this.state.obj.id == undefined){
                this.state.count = this.state.count+1;
                this.state.obj.id = this.state.count;
                this.state.array.push(this.state.obj)
            }else{
                let index = this.state.array.findIndex(x => x.id == this.state.obj.id)
    
                this.state.array.splice(index , 1, this.state.obj)
            }
            this.state.obj = {...this.state.blankObj};
            this.setState({...this.state})
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
        return (
          <>
            <form className='w-50 mx-auto my-4 p-4 shadow shadow-lg'>
                <h3>FORM</h3>
                <label>First Name</label>
                <input type="text" className='w-100 my-1 py-1' name="fname" value={this.state.obj.fname ?? ''} onChange={this.getData}/>
                <label>Email</label>
                <input type="email" className='w-100 my-1 py-1' name="email" value={this.state.obj.email ?? ''} onChange={this.getData}/>
                <label>Gender</label> <br />
                <input type="radio" name="gender" value='Male' onChange={this.getData} checked={this.state.obj.gender == 'Male'} />Male
                <input type="radio" name="gender" value='Female' onChange={this.getData} checked={this.state.obj.gender == 'Female'}/>Female <br />
                <label>Agree</label> <br />
                <input type="radio" name="agree" value='Yes' onChange={this.getData} checked={this.state.obj.agree == 'Yes'} />Yes
                <input type="radio" name="agree" value='No' onChange={this.getData} checked={this.state.obj.agree == 'No'} />No <br />
    
                <label>Hobby</label> <br />
                <input type="checkbox" name="hobby" value='Reading' onChange={this.getData} checked={this.state.obj.hobby?.includes('Reading') == true}/>Reading
                <input type="checkbox" name="hobby" value='Travelling' onChange={this.getData} checked={this.state.obj.hobby?.includes('Travelling') == true}/>Travelling
                <input type="checkbox" name="hobby" value='Sleeping' onChange={this.getData} checked={this.state.obj.hobby?.includes('Sleeping') == true}/>Sleeping
                <input type="checkbox" name="hobby" value='Playing' onChange={this.getData} checked={this.state.obj.hobby?.includes('Playing') == true}/>Playing <br />
    
                <button type='button' className='btn btn-warning mt-3' onClick={this.saveData}>Save</button>
            </form>
    
            <table className='table'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Email</th>
                        <th>Gender</th>
                        <th>Agree</th>
                        <th>Hobby</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.array.map((x,i) => {
                            return <tr key={i}>
                                <td>{x.id}</td>
                                <td>{x.fname}</td>
                                <td>{x.email}</td>
                                <td>{x.gender}</td>
                                <td>{x.agree}</td>
                                <td>{x.hobby?.join(',')}</td>
                                <td>
                                    <button className='btn btn-info py-1 me-2' onClick={() => this.editData(x.id)}>EDIT</button>
                                    <button className='btn btn-danger py-1 me-2' onClick={() => this.deleteData(x.id)}>DELETE</button>
                                </td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
          </>
        )
      }
}

export default FormHendelingClass309