import React, { useState } from 'react'

const FormPractice2 = () => {
    let [obj, setobj] = useState({})
    // let [array, setArray] = useState([])
    let [array, setArray] = useState(JSON.parse(localStorage.getItem('array')) || [])
    // let [count, setcount] = useState(0)
    let [count, setcount] = useState(JSON.parse(localStorage.getItem('count')) || 0)
    let [blankObj, setblankObj] = useState({})
    
    
    const getData  = async (e) =>{
        if(e.target.type == 'checkbox')
        {
            obj[e.target.name] = obj[e.target.name] ?? []
            blankObj[e.target.name] = []
            if(e.target.checked)
            {
                obj[e.target.name].push(e.target.value)
            }
            else
            {
                // let index = obj[e.target.name].findIndex(x => x == e.target.value)
                // obj[e.target.name].splice(index,1)
                
                obj[e.target.name] = obj[e.target.name].filter(x => x != e.target.value)
            }
        }

        else if (e.target.type == 'file')
        {
            obj[e.target.name] = await toBase64(e.target.files[0])
            blankObj[e.target.name] = ''
        }

        else
        {
            obj[e.target.name] = e.target.value
            blankObj[e.target.name] = ''
        }
        console.log(obj);
        setblankObj({...blankObj})
        setobj({...obj})
    }

    const toBase64 = file => new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = reject;
    });


    const saveData = () => {
        if(obj.id == undefined)
        {
            count++
            setcount(count)
            obj.id = count
            array.push(obj)
            // setArray([...array])
            localStorage.setItem('count',JSON.stringify(count))
        }
        else
        {
            let index = array.findIndex(x => x.id == obj.id)
            array.splice(index,1,obj)
        }
        setArray([...array])
        localStorage.setItem('array', JSON.stringify(array))
        setobj({...blankObj})
    }

    const deleteData = (id) =>{
        let index = array.findIndex(x => x.id == id)
        array.splice(index,1)
        setobj({...obj})
        console.log('Pass');
        localStorage.setItem('array', JSON.stringify(array))
    }

    const editData = (id) =>{
        let editObj = array.find(x => x.id == id)
        obj = editObj
        setobj({...obj})
    }
    
  return (
    <>
        <form className='w-50 mx-auto my-4'>
        <div className="mb-3">
            <label  className="form-label">Email </label>
            <input type="email" name='email' value={obj.email ?? ''} className="form-control" onChange={getData} id="exampleInputEmail1" aria-describedby="emailHelp"/>
        </div>
        <div className="mb-3">
            <label  className="form-label">Password</label>
<<<<<<< HEAD
            <input type="password" name='password' autoComplete='on' value={obj.password} className="form-control" onChange={getData} id="exampleInputPassword1"/>
=======
            <input type="password" name='password' value={obj.password ?? ''} className="form-control" onChange={getData} id="exampleInputPassword1"/>
>>>>>>> abdf469 (class Component)
        </div>

        <label className="form-check-label" >Gender</label> <br />
            <div className="form-check form-check-inline">
            <input className="form-check-input" name='Gender' checked={obj.Gender == 'Male' ?? ''} type="radio" onChange={getData}   id="inlineCheckbox1"  value="Male"/>
            <label className="form-check-label"  >Male</label>
            </div>
            <div className="form-check form-check-inline">
            <input className="form-check-input" name='Gender' checked={obj.Gender == 'Female' ?? ''} type="radio" onChange={getData}  id="inlineCheckbox2" value="Female"/>
            <label className="form-check-label"  >Female</label>
            </div>
            <div className="form-check form-check-inline">
            <input className="form-check-input" name='Gender' checked={obj.Gender == 'Other' ?? ''} type="radio" onChange={getData}  id="inlineCheckbox3" value="Other"/>
            <label className="form-check-label"  >Other</label>
            </div>
            <br />

        <label className="form-check-label" >Hobbies</label><br />

        <div className="form-check form-check-inline">
            <input className="form-check-input" checked={obj.hobbies?.includes('Reading') ?? ''} name='hobbies' onChange={getData} type="checkbox" id="inlineCheckbox1" value="Reading"/>
            <label className="form-check-label" >Reading</label>
            </div>
            <div className="form-check form-check-inline">
            <input className="form-check-input" checked={obj.hobbies?.includes('Coding') ?? ''} name='hobbies' onChange={getData}  type="checkbox" id="inlineCheckbox2" value="Coding"/>
            <label className="form-check-label">Coding</label>
            </div>
            <div className="form-check form-check-inline">
            <input className="form-check-input" checked={obj.hobbies?.includes('Submit') ?? ''} name='hobbies' onChange={getData}   type="checkbox" id="inlineCheckbox3" value="Submit" />
            <label className="form-check-label">Submit</label>
        </div><br />

        <label htmlFor="">File</label> <br />
        <input type="file"  onChange={getData}  name="dp" id="dp" /> <br />
        <img src={obj.dp} style={{height:'auto',width:'auto',  maxHeight:'100px',maxWidth:'60px'}} alt="" id='img' /> <br />

        <button type="button" onClick={saveData} className="btn btn-primary my-2">Submit</button>
    </form>

    <table className='table w-75 mx-auto border-1 table-dark'>
        <thead>
            <tr>
                <th>Id</th>
                <th>Profile</th>
                <th>Email</th>
                <th>Password</th>
                <th>Gender</th>
                <th>Hobbies</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
           {
            array.map((x,i) => {
                return(
                    <tr key={i}>
                        <td>{x.id}</td>
                        <td><img src={x.dp} alt="" style={{height:'40px',width:'40px'}} /></td>
                        <td>{x.email}</td>
                        <td>{x.password}</td>
                        <td>{x.Gender}</td>
                        <td>{x.hobbies?.join()}</td>
                        <td>
                            <button type='button' onClick={() => editData(x.id)}  className='btn btn-light mx-2'>Edit</button>
                            <button type='button' onClick={() => deleteData(x.id)} className='btn btn-danger mx-2'>Delete</button>
                        </td>
                    </tr>

                )
            })
           }
        </tbody>
    </table>
    

    </>
  )
}

export default FormPractice2