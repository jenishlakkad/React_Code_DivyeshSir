// Date:- 28/09/23
// Day:- Thursday
// Topic:- Practice for Form Hendeling doing it with lecture vidio no:- 13
import React from 'react'
import { useState } from 'react'

const Lecture13 = () => {
    let [obj, setobj] = useState({})
    let [array,setarray] = useState([])

    const getData = (e) =>{
        if(e.target.type == 'checkbox'){
            obj[e.target.name] = obj[e.target.name] ?? []
            if(e.target.checked){
                obj[e.target.name].push(e.target.value)
            }
            else{
                // let index = obj[e.target.name].findIndex(x => x == e.target.value)
                // obj[e.target.name].splice(index,1 )
                obj[e.target.name] = obj[e.target.name].filter((x) => x != e.target.value)
            }
        }
        else
        {
            obj[e.target.name] = e.target.value
        }
        setobj({...obj})
        // console.log("jensih");

    }
    const saveData = () => {
        array.push(obj)
        setarray(array,obj)
        console.log(array);
    }


  return (
    <>
       <form action="" className='form w-50 mx-auto my-4 border border-2 p-3 shadow'>
            <label htmlFor="" className='form-label w-100'>Name</label>
            <input onChange={getData} type="text"  className='form-control' name="name" id="name" /><br />
            
            <label htmlFor="" className='form-label'>Email</label>
            <input onChange={getData} className='form-control' type="email" name="email" id="email" /><br />

            <label htmlFor="">Gender</label> <br />
            <input  onChange={getData} type="radio" name="gender" value='male' id="male" />
            <label htmlFor="">Male</label>
            <input  onChange={getData} type="radio" name="gender" value='female' id="female" />
            <label htmlFor="">Female</label> <br />
            <button type='button' onClick={saveData}>Sumbmit</button><br /> <br />


            <div className="form-check form-check-inline">
                <input className="form-check-input" name='Hobbies' onChange={getData} type="checkbox" value='Eating' id="inlineCheckbox1"  />
                <label className="form-check-label" >Eating</label>
                </div>
                <div className="form-check form-check-inline">
                <input className="form-check-input" name='Hobbies' onChange={getData} type="checkbox" value='Coding' id="inlineCheckbox2"  />
                {/* <input type="checkbox"  onChange={getData} name="Hobbies" value='coding' id="h1" /> */}

                <label className="form-check-label" >Coding</label>
                </div>
                <div className="form-check form-check-inline">
                <input className="form-check-input" name='Hobbies' onChange={getData} type="checkbox" value='Nothing' id="inlineCheckbox3"  />
                <label className="form-check-label" >Nothing </label>
            </div>

       </form>



       <table className='container w-50 border border-1'>
        <thead>
            <tr>
                <td>Name</td>
                <td>Email</td>
            </tr>
        </thead>
        <tbody>
            {
                array.map((x,i) => {
                    return(
                        <tr key={i}>
                            <td>{x.name}</td>
                            <td>{x.email}</td>
                        </tr>
                    )
                })

            }
        </tbody>
       </table>
    </>
  )
}

export default Lecture13