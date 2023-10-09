import React, { useContext } from 'react'
import { jenish } from './F_09_10_MainContext'

const F_09_10_Form_Context = () => {
  
  let data = useContext(jenish)
  const getData = async (e) => {
    if (e.target.type == "checkbox") {
      data.obj[e.target.name] = data.obj[e.target.name] ?? [];
      data.blankObj[e.target.name] = [];
      if (e.target.checked) {
        data.obj[e.target.name].push(e.target.value);
      } else {
        data.obj[e.target.name] = data.obj[e.target.name].filter(
          (x) => x != e.target.value
        );
      }
    } 
    // else if (e.target.type == "file") {
    //   data.obj[e.target.name] = await toBase64(e.target.files[0]);
    // }
     else {
      data.obj[e.target.name] = e.target.value;
      data.blankObj[e.target.name] = "";
    }
    // console.log(data.obj);
    data.setobj({ ...data.obj });
    data.setblankObj({ ...data.blankObj });
    // setblankObj({...blankObj})
  };

  const saveData = () => {
    if (data.obj.id == undefined) {
      data.count++;
      data.setcount(data.count);
      data.obj.id = data.count;
      data.array.push(data.obj);
      // localStorage.setItem('count',JSON.stringify(count))
    } else {
      let index = data.array.findIndex((x) => x.id == data.obj.id);
      data.array.splice(index, 1, data.obj);
    }
    data.setarray([...data.array]);
    // localStorage.setItem('array',JSON.stringify(array))
    // obj = {}
    data.setobj({ ...data.blankObj });
    // console.log(array);
  };
  return (
    <>
      <form className="w-50 mx-auto my-4">
        <div className="mb-3">
          <label className="form-label">Email </label>
          <input
            type="email"
            name="email"
            className="form-control"
            value={data.obj.email}
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
            value={data.obj.password}
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
            checked={data.obj.Gender == "Male"}
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
            checked={data.obj.Gender == "Female"}
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
            checked={data.obj.Gender == "Other"}
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
            checked={data.obj.hobbies?.includes("Reading")}
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
            checked={data.obj.hobbies?.includes("Coding")}
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
            checked={data.obj.hobbies?.includes("Submit")}
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
          src={data.obj.file}
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
    </>
  )
}

export default F_09_10_Form_Context