import React, { useContext, useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import { data } from './C_5_UseContext'


const C_3_Form = () => {
    const datas = useContext(data)
//   let [arr, setArr] = useState([])
//     let [obj, setObj] = useState({})
//     let [blankObj, setblankObj] = useState({})
//     let [count, setCount] = useState(0)

//     //Valid State
//     let [hobbyValid, setHobbyValid] = useState('')
//     let [mailValid, setMailValid] = useState('')
//     let [conValid, setConValid] = useState('')

    const handelChange = async (e) => {
        if (e.target.type === 'checkbox') {
            datas.obj[e.target.name] = datas.obj[e.target.name] ?? []
            datas.blankObj[e.target.name] = []
            if (e.target.checked) {
                datas.obj[e.target.name] = [...datas.obj[e.target.name], e.target.value]
            }
            else {
                datas.obj[e.target.name] = datas.obj[e.target.name]?.filter(z => z !== e.target.value)
            }

            (datas.obj[e.target.name].length >= 3) ? datas.setHobbyValid(true) : datas.setHobbyValid("Select 3 or more *")

        } else {
            if (e.target.name === "firstName" || e.target.name === "lastName") {
                if (/^[a-z A-Z]*$/.test(e.target.value)) {
                    datas.obj[e.target.name] = e.target.value
                }
                else { console.log("not valid text") }
            } else if (e.target.type === "email") {
                datas.obj[e.target.name] = e.target.value
                if (e.target.value.endsWith("@gmail.com") || e.target.value.endsWith("@outlook.com")) {
                    datas.setMailValid(true)
                } else { datas.setMailValid("Email must be @gmail.com OR @outlook.com") }
            } else if (e.target.type === "number") {
                if (e.target.value.length === 10) {
                    datas.setConValid(true)
                } else { datas.setConValid("Contact must be 10 numbers *") }
                datas.obj[e.target.name] = e.target.value
            }
            else {
                datas.obj[e.target.name] = e.target.value
            }
        }
        datas.blankObj[e.target.name] = ''
        datas.setObj({ ...datas.obj })
        datas.setblankObj({ ...datas.blankObj })
    }

    //validation state
    const addValid = () => {
        if (datas.hobbyValid === true && datas.mailValid === true && datas.conValid === true) {
            addData()
        }
    }

    const addData = () => {
        if (datas.obj.id) {
            let index = datas.arr.findIndex(z => z.id === datas.obj.id)
            datas.arr.splice(index, 1, datas.obj)
        } else {
            datas.setCount(++datas.count)
            datas.obj.id = datas.count;
            datas.arr.push(datas.obj)
        }
        datas.setArr([...datas.arr])

        datas.setObj({ ...datas.blankObj })
        console.log(datas.arr)

        datas.setConValid('')
        datas.setHobbyValid('')
        datas.setMailValid('')
    }

   

    useEffect(() => {
        datas.setArr(JSON.parse(localStorage.getItem("myArray")) ?? [])
        datas.setCount(JSON.parse(localStorage.getItem("myId")) ?? 0)
    }, [])

    useEffect(() => {
        localStorage.setItem("myArray", JSON.stringify(datas.arr))
        localStorage.setItem("myId", JSON.stringify(datas.count))
    }, [datas.arr, datas.count])

    return (
        <>
            <div className='container w-50 mt-2 shadow p-3'>
                <h5>FORM</h5>
                <form className='row g-3'>
                    <div className='col-6'>
                        <input type="text" placeholder='firstName' value={datas.obj.firstName} className='form-control' onChange={handelChange} name="firstName" />
                    </div>
                    <div className='col-6'>
                        <input type="text" placeholder='lastName' value={datas.obj.lastName} className='form-control' onChange={handelChange} name="lastName" />
                    </div>
                    <div className='col-6'>
                        <input type="email" placeholder='Email' value={datas.obj.email} className='form-control' onChange={handelChange} name="email" />
                        <span className='text-danger small'>{datas.mailValid}</span>
                    </div>
                    <div className='col-6'>
                        <input type="number" placeholder='Contact' value={datas.obj.contact} className='form-control' onChange={handelChange} name="contact" />
                        <span className='text-danger small'>{datas.conValid}</span>
                    </div>
                    <div className="col-6">
                        <input type="date" className='form-control' onChange={handelChange} name="date" value={datas.obj.date} />
                    </div>
                    <div className='col-12'>
                        <label>Gender :- </label> <br />
                        <input type="radio" name="gender" checked={datas.obj.gender === 'male'} className='form-check-input' onChange={handelChange} value='male' />Male
                        <input type="radio" name="gender" checked={datas.obj.gender === 'female'} className='form-check-input ms-2' onChange={handelChange} value='female' />Female
                    </div>
                    <div className='col-12'>
                        <label>Hobby :-</label> <br />
                        <input type="checkbox" name="hobbies" checked={datas.obj.hobbies?.includes("Code")} className='form-check-input' onChange={handelChange} value='Code' />Code
                        <input type="checkbox" name="hobbies" checked={datas.obj.hobbies?.includes("Travel")} className='form-check-input ms-2' onChange={handelChange} value='Travel' />Travel
                        <input type="checkbox" name="hobbies" checked={datas.obj.hobbies?.includes("Garba")} className='form-check-input ms-2' onChange={handelChange} value='Garba' />Garba
                        <input type="checkbox" name="hobbies" checked={datas.obj.hobbies?.includes("Vlog")} className='form-check-input ms-2' onChange={handelChange} value='Vlog' />Vlog
                        <input type="checkbox" name="hobbies" checked={datas.obj.hobbies?.includes("Eat")} className='form-check-input ms-2' onChange={handelChange} value='Eat' />Eat
                        <br /> <span className='text-danger small'>{datas.hobbyValid}</span>
                    </div>
                    <div className='col-12'>
                        <label>Information :-</label>
                        <textarea style={{ textTransform: "capitalize" }} name="information" value={datas.obj.information} onChange={handelChange} className='form-control mt-1'></textarea>
                    </div>
                    <div>
                        <input type="button" value="SAVE" onClick={() => addValid()} className='btn btn-success py-1 mt-2' />
                    </div>
                </form>
            </div>


            {/* <div className="bg-warning-subtle p-2 mx-auto mt-3">
                <table className='table text-center table-striped-columns'>
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">firstName</th>
                            <th scope="col">lastName</th>
                            <th scope="col">Email</th>
                            <th scope="col">Contact</th>
                            <th scope="col">Date</th>
                            <th scope="col">Gender</th>
                            <th scope="col">Hobby</th>
                            <th scope="col">Information</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            datas.arr?.map((item, ind) => {
                                return <tr key={ind}>
                                    <td>{item.id}</td>
                                    <td>{item.firstName}</td>
                                    <td>{item.lastName}</td>
                                    <td>{item.email}</td>
                                    <td>{item.contact}</td>
                                    <td>{item.date}</td>
                                    <td>{item.gender}</td>
                                    <td>{item.hobbies?.join(", ")}</td>
                                    <td>{item.information}</td>
                                    <td> <button className='btn btn-info me-2' onClick={() => editData(item)}>EDIT</button>
                                        <button className='btn btn-danger' onClick={() => delData(item.id)}>DELETE</button>
                                    </td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div> */}
        </>
    )
}

export default C_3_Form