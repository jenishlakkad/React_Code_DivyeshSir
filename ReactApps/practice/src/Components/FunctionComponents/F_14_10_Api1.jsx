// Date:- 14/10/23
// Day:- Saturday
// Topic:- Krisa teach me how to get api function from another component 
//           and how to implement it     

import React from 'react'
import { getApi } from './F_14_10_Api2'
import { useState } from 'react'

const F_14_10_Api1 = () => {

    
    const [array, setArray] = useState([])
    const xyz = async() =>{
        let a = await getApi()
        setArray([...a])
    }
  return (
    <>
        <button className='btn' onClick={xyz}>Kick Me</button>
        <table className='table w-50 mx-auto'>
            <thead>
                <tr>
                    <th>FirstName</th>
                    <th>LastName</th>
                    <th>Age</th>
                </tr>
            </thead>
            <tbody>
                {
                    array.map((x,i)=>{
                        return(
                            <tr key={i}>
                                <td>{x.firstName}</td>
                                <td>{x.lastName}</td>
                                <td>{x.age}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </>
  )
}

export default F_14_10_Api1