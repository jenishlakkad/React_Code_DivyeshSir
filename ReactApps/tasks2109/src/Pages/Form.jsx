// Date:-23/10/23
// Day:- Monday
// Topic:- Routing Form Page
import React, { useEffect, useState,useContext } from 'react'
import Swal from 'sweetalert2'
import Home from './Home';
// export tableData;
const Form = () =>{
    let [obj, setobj] = useState({});
    let [array, setarray] = useState([]);
    // let [array, setarray] = useState(JSON.parse(localStorage.getItem('array')) || [])
    let [blankObj, setblankObj] = useState({});
    let [count, setcount] = useState(0);
    // let [count, setcount] = useState(JSON.parse(localStorage.getItem('count')) || 0)

    // const tableData =() => {
    //    let data =  array
    //    return data        
    // }
    // export default tableData
  
    const getData = async (e) => {
      if (e.target.type == "checkbox") {
        obj[e.target.name] = obj[e.target.name] ?? [];
        blankObj[e.target.name] = [];
        if (e.target.checked) {
          obj[e.target.name].push(e.target.value);
        } else {
          obj[e.target.name] = obj[e.target.name].filter(
            (x) => x != e.target.value
          );
        }
      } else if (e.target.type == "file") {
        obj[e.target.name] = await toBase64(e.target.files[0]);
      } else {
        obj[e.target.name] = e.target.value;
        blankObj[e.target.name] = "";
      }
      // console.log(obj);
      setobj({ ...obj });
      setblankObj({ ...blankObj });
      // setblankObj({...blankObj})
    };
  
    const saveData = () => {
      if (obj.id == undefined) {
        count++;
        setcount(count);
        obj.id = count;
        array.push(obj);
        // localStorage.setItem('count',JSON.stringify(count))
      } else {
        let index = array.findIndex((x) => x.id == obj.id);
        array.splice(index, 1, obj);
      }
      setarray([...array]);
      // localStorage.setItem('array',JSON.stringify(array))
      // obj = {}
      setobj({ ...blankObj });
      // console.log(array);
    };
  
    const toBase64 = (file) =>
      new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = reject;
      });
  
    const editData = (id) => {
      let editObj = array.find((x) => x.id == id);
      obj = editObj;
      setobj({ ...obj });
      // console.log(editObj);
    };
    const deleteData = (id) => {
      let index = array.findIndex((x) => x.id == id);
      array.splice(index, 1);
      setarray([...array]);
      setobj({ ...obj });
      // localStorage.setItem('array',JSON.stringify(array))
    };
  
    useEffect(() => {
      // const arr= JSON.parse(localStorage.getItem('array') ) || [];
      // const id=  JSON.parse(localStorage.getItem('count') ) || 0;
      // JSON.parse(localStorage.getItem('array'))
      // setarray(JSON.parse(localStorage.getItem("array")) ?? console.log('NOt Working'));
      // setcount(JSON.parse(localStorage.getItem("count")) ?? 3);
      array = JSON.parse(localStorage.getItem("array")) || [];
      setarray(array);
      count = JSON.parse(localStorage.getItem("count")) || 0;
      setcount(count);
      // if(arr){
      //     setarray(arr)
      // }
      // if(id){
      //     setcount(id);
      // }
    }, []);
  
    useEffect(() => {
      localStorage.setItem("array", JSON.stringify(array));
      localStorage.setItem("count", JSON.stringify(count));
    }, [array, count]);
  
    return (
      <>
        <form className="w-50 mx-auto my-4">
          <div className="mb-3">
            <label className="form-label">Email </label>
            <input
              type="email"
              name="email"
              className="form-control"
              value={obj.email}
              onChange={getData}
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              name="password"
              className="form-control"
              value={obj.password}
              onChange={getData}
              id="exampleInputPassword1"
            />
          </div>
          <label className="form-check-label">Gender</label> <br />
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              name="Gender"
              type="radio"
              onChange={getData}
              id="inlineCheckbox1"
              checked={obj.Gender == "Male"}
              value="Male"
            />
            <label className="form-check-label">Male</label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              name="Gender"
              type="radio"
              onChange={getData}
              checked={obj.Gender == "Female"}
              id="inlineCheckbox2"
              value="Female"
            />
            <label className="form-check-label">Female</label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              name="Gender"
              type="radio"
              onChange={getData}
              checked={obj.Gender == "Other"}
              id="inlineCheckbox3"
              value="Other"
            />
            <label className="form-check-label">Other</label>
          </div>
          <br />
          <label className="form-check-label">Hobbies</label>
          <br />
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              name="hobbies"
              onChange={getData}
              checked={obj.hobbies?.includes("Reading")}
              type="checkbox"
              id="inlineCheckbox1"
              value="Reading"
            />
            <label className="form-check-label">Reading</label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              name="hobbies"
              onChange={getData}
              checked={obj.hobbies?.includes("Coding")}
              type="checkbox"
              id="inlineCheckbox2"
              value="Coding"
            />
            <label className="form-check-label">Coding</label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              name="hobbies"
              onChange={getData}
              checked={obj.hobbies?.includes("Submit")}
              type="checkbox"
              id="inlineCheckbox3"
              value="Submit"
            />
  
            <label className="form-check-label">Submit</label>
          </div>
          <br />
          <label htmlFor="">Image</label>
          <input type="file" onChange={getData} name="file" id="file" /> <br />
          <img
            src={obj.file}
            alt=""
            className="my-2"
            style={{
              width: "auto",
              height: "auto",
              maxWidth: "60px",
              maxHeight: "100px",
            }}
            id="image"
          />
          <br />
          <button
            type="button"
            onClick={saveData}
            className="btn btn-primary my-2"
          >
            Submit
          </button>
        </form>
  
        <table className="table border-1 table-dark">
          <thead>
            <tr>
              <th>Id</th>
              <th>Image</th>
              <th>Email</th>
              <th>Password</th>
              <th>Gender</th>
              <th>Hobbies</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {array?.map((x, i) => {
              return (
                <tr key={i}>
                  <td>{x.id}</td>
                  <td>
                    <img
                      src={x.file}
                      alt=""
                      style={{
                        width: "auto",
                        height: "auto",
                        maxWidth: "60px",
                        maxHeight: "100px",
                      }}
                    />
                  </td>
                  <td>{x.email}</td>
                  <td>{x.password}</td>
                  <td>{x.Gender}</td>
                  <td>{x.hobbies?.join()}</td>
                  <td>
                    <button
                      onClick={() => editData(x.id)}
                      type="button"
                      className="mx-2 btn btn-info"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => deleteData(x.id)}
                      type="button"
                      className="mx-2 btn btn-danger"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        <Home name='jensih'/>
      </>
    );
  };

export default Form