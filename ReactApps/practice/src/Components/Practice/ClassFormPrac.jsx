import React, { Component } from 'react'

export default class ClassFormPrac extends Component {
    constructor(){
        super()
        this.state = {
            obj : {},
            array : [],
            emptyObj : {},
            count : 0
        }
    }
    getData = (e) =>{
        if(e.target.type == 'checkbox')
        {
            this.state.obj[e.target.name] = this.state.obj[e.target.name] ?? []
            this.state.emptyObj[e.target.name] =[]
            if(e.target.checked){
                this.state.obj[e.target.name].push(e.target.value)
            }
            else{
                this.state.obj[e.target.name] = this.state.obj[e.target.name].filter(x => x != e.target.value)
            }
        }
        else{

            this.state.obj[e.target.name] = e.target.value
            this.state.emptyObj[e.target.name] =''
        }
        this.setState({...this.state.obj})
        this.setState({...this.state.emptyObj})
        // console.log(this.state.obj);
    }

    saveData = () => {
        this.state.count++
        this.state.obj.id = this.state.count
        this.state.array.push(this.state.obj)
        this.state.obj = {...this.state.emptyObj}
        this.setState({...this.state})
        console.log(this.state.array);
    }
    editData = (id) =>{
        let editObj = this.state.array.find(x => x.id == id)
        this.state.obj = editObj
        this.setState({...this.state})
        console.log(editObj);
    }

    deleteData = (id) =>{
        let index = this.state.array.findIndex(x => x.id == id )
        this.state.array.splice(index,1)
        this.setState({...this.state})
        console.log(id);
    }

  render() {
        
    return (
      <>
        <form className='w-50 mx-auto my-3'>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control"  onChange={this.getData} name='Email' id="exampleInputEmail1" aria-describedby="emailHelp"/>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" onChange={this.getData} name='Password' id="exampleInputPassword1"/>
            </div>

            <label htmlFor="" className="form-label">Hobbies</label> <br />
            <div className="form-check form-check-inline">
                <input className="form-check-input" name='Hobbies' onChange={this.getData} type="checkbox" id="inlineCheckbox1" value="Read"/>
                <label className="form-check-label" htmlFor="inlineCheckbox1">Read</label>
                </div>
                <div className="form-check form-check-inline">
                <input className="form-check-input" name='Hobbies' onChange={this.getData} type="checkbox" id="inlineCheckbox2" value="Dance"/>
                <label className="form-check-label" htmlFor="inlineCheckbox2">Dance</label>
                </div>
                <div className="form-check form-check-inline">
                <input className="form-check-input" name='Hobbies' onChange={this.getData} type="checkbox" id="inlineCheckbox3" value="Write" />
                <label className="form-check-label" htmlFor="inlineCheckbox3">Write </label>
                </div><br />

            <button type="button" onClick={this.saveData} className="btn btn-primary">Submit</button>
        </form>

        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Emial</th>
                    <th>Password</th>
                    <th>Hobbies</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    this.state.array.map((x,i) =>{
                        return(
                            <tr key={i}>
                                <td>{x.id}</td>
                                <td>{x.Email}</td>
                                <td>{x.Password}</td>
                                <td>{x.Hobbies}</td>
                                <td>
                                    <button type='buttton' onClick={() => this.deleteData(x.id)} className='btn btn-danger mx-2 '>Delete</button>
                                    <button type='buttton' onClick={() => this.editData(x.id)} className='btn btn-success mx-2 '>Edit</button>
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
