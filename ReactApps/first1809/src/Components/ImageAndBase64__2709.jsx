import { useState } from "react"
import React from 'react'

const ImageAndBase64__2709 = () => {

  const [obj, setobj] = useState({})
  const [array, setarray] = useState([])
  const getData = (e) =>{
    obj[e.target.name] = e.target.value
    setobj(obj)
    console.log(setobj);
    // console.log(object);
    
  }

  return (
    <>
    <form className='container'>
      <div className="mb-3">
        <label  className="form-label">Email address</label>
          <input type="email" name='email' onChange={getData} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
      </div>

      <div className="mb-3">
        <label  className="form-label">Password</label>
        <input type="password" name='password' onChange={getData} className="form-control" id="exampleInputPassword1" />
      </div>

      <label className="form-check-label" >Gender </label>
      <div className="mb-3 form-check">
        <input  type="radio" name='gender' value='male' className="ms-3" onChange={getData}  id="exampleCheck1"/>
        <label className="form-check-label" >Male</label>

        {/* <input type="radio" name='gender' onChange={getData} className="form-check-input"  /> */}
        <input  type="radio" name='gender' value='female' className="ms-3" onChange={getData} id="exampleCheck2"/>
        <label className="form-check-label" >Female</label>
      </div>

      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
    </>
  )
}

export default ImageAndBase64__2709
































// import React from "react";
// import { useState } from "react";

// const ImageAndBase64__2709 = () => {
//   let [obj, setobj] = useState({});
//   let [array, setArray] = useState([])
//   let img = document.querySelector('#img')

  
  
//   const getData = async(e) => {

//     if(e.target.type == 'file'){
//       obj[e.target.name] = await toBase64(e.target.files[0])
//     }
//     else{
//       obj[e.target.name] = e.target.value;
//     }
//     // img.src = obj.image

//     setobj({...obj}); 
//     console.log(array);
//   };
  
//   let saveData = () =>{
//     array.push(obj)
//     setArray([...array])
//     // setArray([...array,obj])

//   }
//   console.log(array);

  
//   const toBase64 = (file) =>
//     new Promise((resolve, reject) => {
//       const reader = new FileReader();
//       reader.readAsDataURL(file);
//       reader.onload = () => resolve(reader.result);
//       reader.onerror = reject;
//     });


//   return (
//     <>
//       <form action="" classNameName="w-50 mx-auto my-4 p-4 shadow shadow-lg">
//         <h1 classNameName="text-center">User Form</h1>
//         <label htmlFor="">Name</label><br />
//         <input type="text" onChange={getData} name="Name" id="Name" />

//         <label htmlFor="">Image</label><br />
//         <input type="file" onChange={getData} name="image" id="image" /><br />
//         <img src="" alt="" id="img" style={{width: '20px ', height: '20px'}} />

//         <button type="button" onClick={saveData} classNameName="btn btn-success my-5">Save</button>
        
//       </form>

//       <table classNameName="table my-5 ">
//         <thead>
//           <tr>
//             <td>name</td>
//             <td>Image</td>
            
//           </tr>
//         </thead>
//         <tbody>
//           {
//             array.map((x,i) => {
//               return (<tr key={i}>
//                 <td>{x.Name}</td>
//                 <td ><img src={x.image} alt="" width='10px' height='10px' /></td>
//                 <button classNameName='btn btn-info py-1 me-2' onClick={() => this.editData(x.id)}>EDIT</button>
//               </tr>)
//             })
//           }

//         </tbody>

//       </table>
//     </>
//   );
// };

// export default ImageAndBase64__2709;
