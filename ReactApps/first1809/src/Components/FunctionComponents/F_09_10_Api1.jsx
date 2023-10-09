import React, { useState } from 'react'
import axios from 'axios';

const F_09_10_Api1 = () => {
    const [array,setarray] = useState([])
    const [message, setmessage] = useState('')
    
    const getApi = () => {
        axios.get('https://student-api.mycodelibraries.com/api/student/get').then((res) =>{
        // axios.get('https://student-api.mycodelibraries.com/api/user/get').then((res) =>{

    
            // setmessage(res.data.data.firstName)
            setarray([...res.data.data])
            console.log(res.data.data);
        }).catch((err) =>{
            console.log(err);
        })
    }
  return (
    <>
        <h1 className='text-center'>API</h1>
        <div>
            <span>{message}</span>
            <button type='button' className='btn btn-info mx-5' onClick={getApi}>Get</button>
        </div>

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