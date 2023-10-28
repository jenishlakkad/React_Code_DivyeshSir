import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import {getApi} from './../JS/F_09_10_Api'

const F_6_User = (props) => {
    // const [array,setarray] = useState([])
    // let [obj, setobj] = useState({})
    // const params = useParams()
    // useEffect(() => {
    //     let y = array?.find(x => x._id == params.userId)
    //   setobj({...y})
    //     // console.log(obj);
    // //   console.log(array);

    // }, [array])
    // const getUserData = async () =>{
    //     let a = await getApi()
    //     setarray([...a])
    // }
    // useEffect(() => {
    //     getUserData()
    // }, [])
    
    


  return (
    <>
    {/* {console.log(obj)} */}
        <h2 className='text-center  mt-5'>Details</h2>
    <table className='table w-50 mx-auto table-striped'>
            <tbody>
                <tr>
                    <th>FirstName</th>
                    <td>{props.pra.firstName}  </td>
                    {/* <td>{obj.firstName}  </td> */}
                </tr>
                <tr>
                    <th>LastName</th>
                    <td>{props.pra.lastName} </td>
                    {/* <td>{obj.lastName} </td> */}
                </tr>
                <tr>
                    <th>City</th>
                    <td>{props.pra.city} </td>
                    {/* <td>{obj.city} </td> */}
                </tr>
                <tr>
                    <th>Gender</th>
                    <td>{props.pra.gender} </td>
                    {/* <td>{obj.gender} </td> */}
                </tr>
                <tr>
                    <th> Age</th>
                    <td>{props.pra.age} </td>
                    {/* <td>{obj.age} </td> */}
                </tr>
                <tr>
                    <th>Hobbies</th>
                    <td>{props.pra.hobbies} </td>
                    {/* <td>{obj.hobbies} </td> */}
                </tr>
            </tbody>
    </table>
    
    </>
  )
}

export default F_6_User