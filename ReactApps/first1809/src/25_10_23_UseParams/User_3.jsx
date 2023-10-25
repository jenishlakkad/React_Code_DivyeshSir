import React from 'react'

const User_3 = (props) => {
  return (
    <>
        <h2 className='text-center  mt-5'>Details</h2>
    <table className='table w-50 mx-auto table-striped'>
            <tbody>
                <tr>
                    <th>FirstName</th>
                    <td>{props.obj.firstName}  </td>
                </tr>
                <tr>
                    <th>LastName</th>
                    <td>{props.obj.lastName} </td>
                </tr>
                <tr>
                    <th>City</th>
                    <td>{props.obj.city} </td>
                </tr>
                <tr>
                    <th>Gender</th>
                    <td>{props.obj.gender} </td>
                </tr>
                <tr>
                    <th> Age</th>
                    <td>{props.obj.age} </td>
                </tr>
                <tr>
                    <th>Hobbies</th>
                    <td>{props.obj.hobbies} </td>
                </tr>
            </tbody>
    </table>
    
    </>
  )
}

export default User_3