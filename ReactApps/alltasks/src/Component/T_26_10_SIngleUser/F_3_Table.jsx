// Date:-26/10/23
// Day:- Thursday
// Topic:- Single User

import React from 'react'
import { useContext } from 'react'
import Swal from 'sweetalert2'
import { data } from './F_4_UseContext0'
import { Link, useNavigate } from 'react-router-dom'


const F_3_Table = (props) => {
  const datas = useContext(data)
  const navigate = useNavigate();
  const delData = (id) => {
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire(
                'Deleted!',
                'Your data has been deleted.',
                'success'
            )
            let ind = datas.arr.findIndex(z => z.id === id)
            datas.arr.splice(ind, 1)
            datas.setArr([...datas.arr])
        }
    })
}
    const sendData = () => {
        navigate('/user')
    }

const editData = (edtObj) => {
    datas.setObj({ ...datas.edtObj })
}
  return (
    <>
        <h2>Table</h2>
        <div className="bg-warning-subtle p-2 mx-auto mt-3">
                <table className='table text-center table-striped-columns'>
                    <thead>
                        <tr>
                            {/* <th scope="col">ID</th> */}
                            <th scope="col">firstName</th>
                            <th scope="col">lastName</th>
                            {/* <th scope="col">Email</th>
                            <th scope="col">Contact</th>
                            <th scope="col">Date</th>
                            <th scope="col">Gender</th>
                            <th scope="col">Hobby</th>
                            <th scope="col">Information</th>
                            <th scope="col">Action</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {
                            // datas.arr?.map((item, ind) => {
                            //     return <tr key={ind}>
                            //         <td>{item.id}</td>
                            //         <td>{item.firstName}</td>
                            //         <td>{item.lastName}</td>
                            //         <td>{item.email}</td>
                            //         <td>{item.contact}</td>
                            //         <td>{item.date}</td>
                            //         <td>{item.gender}</td>
                            //         <td>{item.hobbies?.join(", ")}</td>
                            //         <td>{item.information}</td>
                            //         <td> <button className='btn btn-info me-2' onClick={() => editData(item)}>EDIT</button>
                            //             <button className='btn btn-danger' onClick={() => delData(item.id)}>DELETE</button>
                            //         </td>
                            //     </tr>
                            // })

                            // ################# With use params ###########

                            datas.arr?.map((x,i) =>{
                                return(
                                    // <tr key={i} onClick={() => props.setpra(x)}>
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
            </div>
    </>
  )
}

export default F_3_Table