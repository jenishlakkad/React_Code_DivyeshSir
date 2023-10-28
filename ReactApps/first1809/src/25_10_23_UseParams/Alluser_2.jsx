import React, { useEffect, useState } from 'react'

import { getApi }  from '../Components/JS/F_09_10_Api'
import F_09_10_Api1 from '../Components/FunctionComponents/F_09_10_Api1'
import { Link, useNavigate } from 'react-router-dom'
const Alluser_2 = (props) => {
    const [array,setarray] = useState([])

    // With Params (ID valu)
    const navigate = useNavigate()
    const sendData = (obj) => {
        if(obj.firstName != ''){
            navigate('/user/'+obj._id)
        }
        // console.log(obj);
    }
    const getUserData = async () =>{
        let a = await getApi()
        setarray([...a])
    }
    useEffect(() => {
        getUserData()
    }, [])
    
  return (
    <>
    {/* <F_09_10_Api1/> */}
        {/* {console.log(array)} */}
        <h1>AllUser</h1>
        <table className='table w-50 mx-auto'>
            <thead>
                <tr>
                    <th>FirstName</th>
                    <th>LastName</th>
                </tr>
            </thead>
            <tbody>
                {
                    array.map((x,i) =>{
                        return(
                            // <tr key={i} onClick={() => props.setobj(x)}>
                            //     <Link to='/user'>
                            //         <td >{x.firstName}</td>
                            //         <td>{x.lastName}</td>
                            //     </Link>
                            // </tr>
                            <tr key={i} onClick={() =>sendData(x)}>
                                    <td >{x.firstName}</td>
                                    <td>{x.lastName}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </>
  )
}

export default Alluser_2