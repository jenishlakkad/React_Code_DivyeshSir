import React, { useState } from 'react'
import axios from 'axios';

const F_09_10_Api1 = () => {
    const [array,setarray] = useState([])
    const [message, setmessage] = useState('')
    const [obj, setobj] = useState({})
    const [emptyObj, setemptyObj] = useState({})
    
    const getApi = () => {
        
        axios.get('https://student-api.mycodelibraries.com/api/student/get').then((res) =>{
            setarray([...res.data.data])
            console.log(res.data);
        }).catch((err) =>{
            console.log(err);
        })
        
    }

    const saveData = (e) => {
        if(e.target.type == 'checkbox')
        {
            obj[e.target.name] = obj[e.target.name] ?? []
            emptyObj[e.target.name] = []
            if(e.target.checked)
            {
                obj[e.target.name].push(e.target.value)
            }
            else
            {
                obj[e.target.name] = obj[e.target.name].filter(x => x != e.target.value)
            }
        }
        else{
            obj[e.target.name] = e.target.value
            emptyObj[e.target.name] = ''
        }
        // setobj({...obj})
        setemptyObj({...emptyObj})
    }
    const addApi = () => {
        // let obj1 =  {
        //     "firstName": "Shaikh23",
        //     "lastName": "Irshad23",
        //     "age": 12,
        //     "hobbies": "Reading,Exersice",
        //     "gender": "Male",
        //     "city": "Surat"
        //   }
        // console.log(emptyObj);
        console.log(obj);
        axios.post('https://student-api.mycodelibraries.com/api/student/add',obj).then((res) => {
            getApi()
          console.log(res);
        })

        setobj(emptyObj)
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
    }
  return (
    <>
        <h1 className='text-center'>API</h1>
        <div className='text-center'>
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
            <div className="mb-3">
                <label htmlFor="exampleInput" className="form-label">Age</label>
                <input type="number" className="form-control" name='age'  onChange={(e) =>saveData(e)}  value={obj.age} id="exampleInput"/>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputc" className="form-label">City</label>
                <input type="text" className="form-control" name='city'  onChange={(e) =>saveData(e)}  value={obj.city} id="exampleInputc"/>
            </div>

            <div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" checked={obj.gender == 'Male'} type="radio" name="gender" onChange={saveData} id="inlineRadio1" value="Male"/>
                    <label className="form-check-label" htmlFor="inlineRadio1">Male</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" checked={obj.gender == 'Female'} type="radio" name="gender" onChange={saveData} id="inlineRadio2" value="Female"/>
                    <label className="form-check-label" htmlFor="inlineRadio2">Female</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" checked={obj.gender == 'Other'} type="radio" name="gender" onChange={saveData} id="inlineRadio3" value="Other" />
                    <label className="form-check-label" htmlFor="inlineRadio3">Other</label>
                </div>
            </div>

            <label htmlFor="" className="form-label">Hobbies</label>
            <div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="checkbox" checked={obj.hobbies?.includes('Reading')}   name='hobbies' onChange={saveData} id="inlineCheckbox1" value="Reading"/>
                    <label className="form-check-label" htmlFor="inlineCheckbox1">Reading</label>
                </div>
                    <div className="form-check form-check-inline">
                    <input className="form-check-input" type="checkbox"  checked={obj.hobbies?.includes('Swimming')} name='hobbies' onChange={saveData} id="inlineCheckbox2" value="Swimming"/>
                    <label className="form-check-label" htmlFor="inlineCheckbox2">Swimming</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="checkbox"  checked={obj.hobbies?.includes('Dancing')} name='hobbies' onChange={saveData} id="inlineCheckbox3" value="Dancing" />
                    <label className="form-check-label" htmlFor="inlineCheckbox3">Dancing</label>
                </div>
            </div>
            <button type="button" onClick={addApi} className="btn btn-primary">Submit</button>
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
                </tr>
            </thead>
            <tbody>
                {
                    array.map((x,i) =>{
                        return(
                            <tr key={i}>
                                <td>{x.firstName}</td>
                                <td>{x.lastName}</td>
                                <td>{x.city}</td>
                                <td>{x.age}</td>
                                <td>{x.gender}</td>
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