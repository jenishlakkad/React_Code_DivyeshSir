import React from "react";
import { useState } from "react";

const ImageAndBase64__2709 = () => {
  let [obj, setobj] = useState({});
  let [array, setArray] = useState([])
  
  
  const getData = async(e) => {

    if(e.target.type == 'file'){
      obj[e.target.name] = await toBase64(e.target.files[0])
    }
    else{
      obj[e.target.name] = e.target.value;
    }
    setobj({...obj}); 
    console.log(array);
  };
  
  let saveData = () =>{
    array.push(obj)
    setArray([...array])
    // setArray([...array,obj])

  }
  console.log(array);

  
  // let img = document.querySelector('#img')
  const toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
    });


  return (
    <>
      <form action="" className="w-50 mx-auto my-4 p-4 shadow shadow-lg">
        <h1 className="text-center">User Form</h1>
        <label htmlFor="">Name</label><br />
        <input type="text" onChange={getData} name="Name" id="Name" />

        <label htmlFor="">Image</label><br />
        <input type="file" onChange={getData} name="image" id="image" /><br />

        <button type="button" onClick={saveData} className="btn btn-success my-5">Save</button>
        
      </form>

      <table className="table my-5 ">
        <thead>
          <tr>
            <td>name</td>
            <td>Image</td>
            
          </tr>
        </thead>
        <tbody>
          {
            array.map((x,i) => {
              return (<tr key={i}>
                <td>{x.Name}</td>
                <td><img src='{x.imgage}' alt="" width={10}height={10} /></td>
                <button className='btn btn-info py-1 me-2' onClick={() => this.editData(x.id)}>EDIT</button>
              </tr>)
            })
          }

        </tbody>

      </table>
    </>
  );
};

export default ImageAndBase64__2709;
