import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2'

const F_19_10_FormValidation     = () => {
    let [arr, setArr] = useState([])
    let [obj, setObj] = useState({})
    let [blankObj, setblankObj] = useState({})
    let [count, setCount] = useState(0)

    //Valid State
    let [hobbyValid, setHobbyValid] = useState('')
    let [mailValid, setMailValid] = useState('')
    let [conValid, setConValid] = useState('')

    const handelChange = async (e) => {
        if (e.target.type === 'checkbox') {
            obj[e.target.name] = obj[e.target.name] ?? []
            blankObj[e.target.name] = []
            if (e.target.checked) {
                obj[e.target.name] = [...obj[e.target.name], e.target.value]
            }
            else {
                obj[e.target.name] = obj[e.target.name]?.filter(z => z !== e.target.value)
            }

            (obj[e.target.name].length >= 3) ? setHobbyValid(true) : setHobbyValid("Select 3 or more *")

        } else {
            if (e.target.name === "firstName" || e.target.name === "lastName") {
                if (/^[a-z A-Z]*$/.test(e.target.value)) {
                    obj[e.target.name] = e.target.value
                }
                else { console.log("not valid text") }
            } else if (e.target.type === "email") {
                obj[e.target.name] = e.target.value
                if (e.target.value.endsWith("@gmail.com") || e.target.value.endsWith("@outlook.com")) {
                    setMailValid(true)
                } else { setMailValid("Email must be @gmail.com OR @outlook.com") }
            } else if (e.target.type === "number") {
                if (e.target.value.length === 10) {
                    setConValid(true)
                } else { setConValid("Contact must be 10 numbers *") }
                obj[e.target.name] = e.target.value
            }
            else {
                obj[e.target.name] = e.target.value
            }
        }
        blankObj[e.target.name] = ''
        setObj({ ...obj })
        setblankObj({ ...blankObj })
    }

    //validation state
    const addValid = () => {
        if (hobbyValid === true && mailValid === true && conValid === true) {
            addData()
        }
    }

    const addData = () => {
        if (obj.id) {
            let index = arr.findIndex(z => z.id === obj.id)
            arr.splice(index, 1, obj)
        } else {
            setCount(++count)
            obj.id = count;
            arr.push(obj)
        }
        setArr([...arr])

        setObj({ ...blankObj })
        console.log(arr)

        setConValid('')
        setHobbyValid('')
        setMailValid('')
    }

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
                let ind = arr.findIndex(z => z.id === id)
                arr.splice(ind, 1)
                setArr([...arr])
            }
        })
    }

    const editData = (edtObj) => {
        setObj({ ...edtObj })
    }

    useEffect(() => {
        setArr(JSON.parse(localStorage.getItem("myArray")) ?? [])
        setCount(JSON.parse(localStorage.getItem("myId")) ?? 0)
    }, [])

    useEffect(() => {
        localStorage.setItem("myArray", JSON.stringify(arr))
        localStorage.setItem("myId", JSON.stringify(count))
    }, [arr, count])

    return (
        <>
            <div className='container w-50 mt-2 shadow p-3'>
                <h5>FORM</h5>
                <form className='row g-3'>
                    <div className='col-6'>
                        <input type="text" placeholder='firstName' value={obj.firstName} className='form-control' onChange={handelChange} name="firstName" />
                    </div>
                    <div className='col-6'>
                        <input type="text" placeholder='lastName' value={obj.lastName} className='form-control' onChange={handelChange} name="lastName" />
                    </div>
                    <div className='col-6'>
                        <input type="email" placeholder='Email' value={obj.email} className='form-control' onChange={handelChange} name="email" />
                        <span className='text-danger small'>{mailValid}</span>
                    </div>
                    <div className='col-6'>
                        <input type="number" placeholder='Contact' value={obj.contact} className='form-control' onChange={handelChange} name="contact" />
                        <span className='text-danger small'>{conValid}</span>
                    </div>
                    <div className="col-6">
                        <input type="date" className='form-control' onChange={handelChange} name="date" value={obj.date} />
                    </div>
                    <div className='col-12'>
                        <label>Gender :- </label> <br />
                        <input type="radio" name="gender" checked={obj.gender === 'male'} className='form-check-input' onChange={handelChange} value='male' />Male
                        <input type="radio" name="gender" checked={obj.gender === 'female'} className='form-check-input ms-2' onChange={handelChange} value='female' />Female
                    </div>
                    <div className='col-12'>
                        <label>Hobby :-</label> <br />
                        <input type="checkbox" name="hobbies" checked={obj.hobbies?.includes("Code")} className='form-check-input' onChange={handelChange} value='Code' />Code
                        <input type="checkbox" name="hobbies" checked={obj.hobbies?.includes("Travel")} className='form-check-input ms-2' onChange={handelChange} value='Travel' />Travel
                        <input type="checkbox" name="hobbies" checked={obj.hobbies?.includes("Garba")} className='form-check-input ms-2' onChange={handelChange} value='Garba' />Garba
                        <input type="checkbox" name="hobbies" checked={obj.hobbies?.includes("Vlog")} className='form-check-input ms-2' onChange={handelChange} value='Vlog' />Vlog
                        <input type="checkbox" name="hobbies" checked={obj.hobbies?.includes("Eat")} className='form-check-input ms-2' onChange={handelChange} value='Eat' />Eat
                        <br /> <span className='text-danger small'>{hobbyValid}</span>
                    </div>
                    <div className='col-12'>
                        <label>Information :-</label>
                        <textarea style={{ textTransform: "capitalize" }} name="information" value={obj.information} onChange={handelChange} className='form-control mt-1'></textarea>
                    </div>
                    <div>
                        <input type="button" value="SAVE" onClick={() => addValid()} className='btn btn-success py-1 mt-2' />
                    </div>
                </form>
            </div>


            <div className="bg-warning-subtle p-2 mx-auto mt-3">
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
                            arr?.map((item, ind) => {
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
            </div>
        </>
    )
}

export default F_19_10_FormValidation