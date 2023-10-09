// Date:- 09/10/23
// Day:- Monday
// Topic:- Form CRUD with LifeCycle

import React, { Component } from 'react'

export default class C_09_10_LifeCycleCRUD extends Component {
    constructor() {
        super();
        this.state = {
            count: 0,
            arr: [],
            obj: {},
            blankObj: {}
        }
    }

    handelChange = async (e) => {
        if (e.target.type === "checkbox") {
            this.state.obj[e.target.name] = this.state.obj[e.target.name] ?? []
            this.state.blankObj[e.target.name] = []
            if (e.target.checked) {
                // this.state.obj[e.target.name].push(e.target.value)
                this.state.obj[e.target.name] = [...this.state.obj[e.target.name], e.target.value]
            } else {
                this.state.obj[e.target.name] = this.state.obj[e.target.name].filter(z => z !== e.target.value)
            }
        } else if (e.target.type === "file") {
            this.state.obj[e.target.name] = await this.toBase64(e.target.files[0])
            this.state.blankObj[e.target.name] = ''
        }
        else {
            this.state.obj[e.target.name] = e.target.value;
            this.state.blankObj[e.target.name] = ''
        }
        this.setState({ ...this.state })

        console.log(this.state.obj)
    }

    save = () => {
        if (this.state.obj.id) {
            let ind = this.state.arr.findIndex(z => z.id === this.state.obj.id)
            this.state.arr.splice(ind, 1, this.state.obj)
        } else {
            this.state.count++
            this.state.obj.id = this.state.count;
            this.state.arr.push(this.state.obj)
        }

        this.state.obj = { ...this.state.blankObj }
        this.setState({ ...this.state })
    }

    editData = (edtObj) => {
        this.state.obj = { ...edtObj }
        this.setState({ ...this.state })
    }

    delData = (id) => {
        let ind = this.state.arr.findIndex(z => z.id === id);
        this.state.arr.splice(ind, 1)
        this.setState({ ...this.state })
    }

    toBase64 = file => new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = reject;
    });

    componentDidUpdate() {
        localStorage.setItem("myArray", JSON.stringify(this.state.arr))
        localStorage.setItem("myId", JSON.stringify(this.state.count))
    }

    componentDidMount() {
        this.state.arr = JSON.parse(localStorage.getItem("myArray")) ?? []
        this.state.count = JSON.parse(localStorage.getItem("myId")) ?? 0
        this.setState({ ...this.state })
    }

    render() {
        return (
            <>
                <div className='container w-50 mt-4 shadow p-3'>
                    <h5>FORM</h5>
                    <form>
                        <input type="text" placeholder='Name' onChange={this.handelChange} value={this.state.obj.fname ?? ''} className='form-control my-2' name="fname" />
                        <input type="text" placeholder='Email' onChange={this.handelChange} value={this.state.obj.email ?? ''} className='form-control my-2' name="email" />
                        <label>Gender :- </label> <br />
                        <input type="radio" name="gender" checked={this.state.obj.gender === "male"} onChange={this.handelChange} className='form-check-input' value='male' />Male
                        <input type="radio" name="gender" checked={this.state.obj.gender === "female"} onChange={this.handelChange} className='form-check-input' value='female' />Female
                        <br />
                        <label>Hobby :-</label> <br />
                        <input type="checkbox" name="hobby" checked={this.state.obj.hobby?.includes("Code")} onChange={this.handelChange} className='form-check-input' value='Code' />Code
                        <input type="checkbox" name="hobby" checked={this.state.obj.hobby?.includes("Travel")} onChange={this.handelChange} className='form-check-input' value='Travel' />Travel
                        <input type="checkbox" name="hobby" checked={this.state.obj.hobby?.includes("Garba")} onChange={this.handelChange} className='form-check-input' value='Garba' />Garba
                        <br />
                        <input type="file" onChange={this.handelChange} name='profile' id="" />
                        <img src={this.state.obj.profile} style={{ width: 'auto', height: "100px" }} alt="" />
                        <br />
                        <button type="button" value="SAVE" className='btn btn-success py-1 mt-2' onClick={this.save}>Submit</button>
                    </form>
                </div>

                <div className="w-75 bg-warning-subtle p-2 mx-auto mt-3">
                    <table className='table'>
                        <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Gender</th>
                                <th scope="col">Hobby</th>
                                <th scope="col">profile</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.arr.map((item, ind) => {
                                    return <tr key={ind}>
                                        <td>{item.id}</td>
                                        <td>{item.fname}</td>
                                        <td>{item.email}</td>
                                        <td>{item.gender}</td>
                                        <td>{item.hobby?.join(", ")}</td>
                                        <td> <img src={item.profile} style={{ height: "50px", width: "auto" }} alt="" /> </td>
                                        <td> <button className='btn btn-info' onClick={() => this.editData(item)}>EDIT</button>
                                            <button className='btn btn-danger' onClick={() => this.delData(item.id)}>DELETE</button>
                                        </td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </table>

                </div>
            </>
        )
    }
}








