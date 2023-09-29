// Date:- 28/09/23
// Day:- Thursday
// Topic:- Practice for Form 

import React from 'react'
import { useState } from 'react'

const FormPractice1 = () => {
        let [obj, setobj] = useState({})
        let [array, setarray] = useState([])
        let [blankObj, setblankObj] = useState({})
        let [count, setcount] = useState(0)



    const getData = (e) => {
        if(e.target.type == 'checkbox')
        {
            obj[e.target.name] = obj[e.target.name] ?? []
            blankObj[e.target.name]= []
            if(e.target.checked)
            {
                obj[e.target.name].push(e.target.value)
            }
            else
            {
                obj[e.target.name] = obj[e.target.name].filter(x => x != e.target.value)
            }
        }
        else
        {
            obj[e.target.name] = e.target.value
            blankObj[e.target.name] = ''
        }
        // console.log(obj);
        setobj({...obj})
        setblankObj({...blankObj})
        // setblankObj({...blankObj})
    }

    
    const saveData = () => {
        if(obj.id == undefined)
        {
            count++
            setcount(count)
            obj.id = count;
            array.push(obj)
        }
        else{
            let index = array.findIndex(x => x.id == obj.id)
            array.splice(index,1,obj)
        }
        setarray([...array])
        // obj = {}
        setobj({...blankObj})
        // console.log(array);
    }


    const editData = (id) =>{
        let editObj = array.find(x=> x.id == id)
        obj = editObj;
        setobj({...obj})
        // console.log(editObj);
    }
    const deleteData = (id) =>{
        let index = array.findIndex(x => x.id == id)
        array.splice(index,1)
        setobj({...obj})
    }

  return (
    <>
    <form className='w-50 mx-auto my-4'>
        <div className="mb-3">
            <label  className="form-label">Email </label>
            <input type="email" name='email' className="form-control" value={obj.email} onChange={getData} id="exampleInputEmail1" aria-describedby="emailHelp"/>
        </div>
        <div className="mb-3">
            <label  className="form-label">Password</label>
            <input type="password" name='password' className="form-control" value={obj.password} onChange={getData} id="exampleInputPassword1"/>
        </div>

        <label className="form-check-label" >Gender</label> <br />
            <div className="form-check form-check-inline">
            <input className="form-check-input" name='Gender' type="radio" onChange={getData} id="inlineCheckbox1" checked={obj.Gender == 'Male'} value="Male"/>
            <label className="form-check-label"  >Male</label>
            </div>
            <div className="form-check form-check-inline">
            <input className="form-check-input" name='Gender' type="radio" onChange={getData}  checked={obj.Gender == 'Female'} id="inlineCheckbox2" value="Female"/>
            <label className="form-check-label"  >Female</label>
            </div>
            <div className="form-check form-check-inline">
            <input className="form-check-input" name='Gender' type="radio" onChange={getData}  checked={obj.Gender == 'Other'} id="inlineCheckbox3" value="Other"/>
            <label className="form-check-label"  >Other</label>
            </div>
            <br />

        <label className="form-check-label" >Hobbies</label><br />

        <div className="form-check form-check-inline">
            <input className="form-check-input" name='hobbies' onChange={getData}  checked={obj.hobbies?.includes('Reading') } type="checkbox" id="inlineCheckbox1" value="Reading"/>
            <label className="form-check-label" >Reading</label>
            </div>
            <div className="form-check form-check-inline">
            <input className="form-check-input" name='hobbies' onChange={getData}  checked={obj.hobbies?.includes('Coding') } type="checkbox" id="inlineCheckbox2" value="Coding"/>
            <label className="form-check-label">Coding</label>
            </div>
            <div className="form-check form-check-inline">
            <input className="form-check-input" name='hobbies' onChange={getData}  checked={obj.hobbies?.includes('Submit') } type="checkbox" id="inlineCheckbox3" value="Submit" />
            <label className="form-check-label">Submit</label>
        </div><br />

        <button type="button" onClick={saveData} className="btn btn-primary my-2">Submit</button>
    </form>

    <table className='table border-1 table-dark'>
        <thead>
            <tr>
                <th>Id</th>
                <th>Email</th>
                <th>Password</th>
                <th>Gender</th>
                <th>Hobbies</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
           {
             array.map((x,i) =>{
                return(
                    <tr key={i}>
                        <td>{x.id}</td>
                        <td>{x.email}</td>
                        <td>{x.password}</td>
                        <td>{x.Gender}</td>
                        <td>{x.hobbies?.join()}</td>
                        <td>
                            <button onClick={() =>editData(x.id)} type='button' className='mx-2 btn btn-info'>Edit</button>
                            <button onClick={() =>deleteData(x.id)} type='button' className='mx-2 btn btn-danger'>Delete</button>
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

export default FormPractice1