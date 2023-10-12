import React, { useState } from 'react'
import axios from 'axios';

const F_09_10_Api1 = () => {
    const [array,setarray] = useState([])
    const [message, setmessage] = useState('')
    const [obj, setobj] = useState({})
    
    const getApi = () => {
        
        axios.get('https://student-api.mycodelibraries.com/api/student/get').then((res) =>{
        // axios.get('https://student-api.mycodelibraries.com/api/user/get').then((res) =>{
            setarray([...res.data.data])
            console.log(res.data.data);
        }).catch((err) =>{
            console.log(err);
        })
        
    }

    const saveData = (e) => {
        // obj[e]
        obj[e.target.name] = e.target.value
        console.log(obj);
    }
    const addApi = () => {
        let obj1 =  {
            // "firstName": "Shaikh23",
            // "lastName": "Irshad23",
            "age": 12,
            "hobbies": "Reading,Exersice",
            "gender": "Male",
            "city": "Surat"
          }
        // console.log(obj);
        axios.post('https://student-api.mycodelibraries.com/api/student/add',obj1).then((res) => {
            getApi()
          console.log(res);
        })
    }

    const deleteApi = async () => {
        await axios.get('https://student-api.mycodelibraries.com/api/student/get').then((res) =>{
            res.data.data.map(x => {
                axios.delete('https://student-api.mycodelibraries.com/api/student/delete?id='+x._id).then((res)=>{
                // axios.delete(`https://student-api.mycodelibraries.com/api/student/delete?id=${x._id}`).then((res)=>{
                    getApi()
                })
            })
        })
        // https://student-api.mycodelibraries.com/api/student/delete?id=6526783b71cbdf2a50881bf1
    }
  return (
    <>
    {
        // console.log(array)
    }
        <h1 className='text-center'>API</h1>
        <div>
            <span>{message}</span>
            <button type='button' className='btn btn-info mx-5' onClick={getApi}>Get</button>
            <button type='button' className='btn btn-dark mx-5' onClick={addApi}>Get</button>
            <button type='button' className='btn btn-danger mx-5' onClick={deleteApi}>Get</button>
        </div>

        <form action="" className='form w-50 mx-auto mt-4'> 
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">First Name</label>
                <input type="text" className="form-control" name='firstName' value={obj.firstName}  onChange={(e) =>saveData(e)} id="exampleInputEmail1" aria-describedby="emailHelp"/>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Last Name</label>
                <input type="text" className="form-control" name='lastName'  onChange={(e) =>saveData(e)}  value={obj.lastName} id="exampleInputPassword1"/>
            </div>
            {/* <div className="mb-3">
                <label htmlFor="exampleInput" className="form-label">Last Name</label>
                <input type="text" className="form-control" name='lastName'  onChange={(e) =>saveData(e)}  value={obj.age} id="exampleInput"/>
            </div> */}
            <button type="button" onClick={addApi} className="btn btn-primary">Submit</button>
        </form>

        <table className='table w-50 mx-auto'>
            <thead>
                <tr>
                    <th>Firstname</th>
                    <th>LastName</th>
                    <th>Hobbies</th>
                </tr>
            </thead>
            <tbody>
                {
                    array.map((x,i) =>{
                        return(
                            <tr key={i}>
                                <td>{x.firstName}</td>
                                <td>{x.lastName}</td>
                                <td>{x.hobbies}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </>
  )
}

export default F_09_10_Api1