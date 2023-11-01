import React, { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

function F5_LoginForm(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [obj, setobj] = useState({})
  const [arr, setarr] = useState(JSON.parse(localStorage.getItem('arr')) || [])
  


  // const getData = (e) =>{
  //   obj[e.target.name] = e.target.value
  //   setobj({...obj})
  // } 

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

// For making LocalHost Empty
const emptyLocalHost = () =>{
  arr.splice(2,arr.length-1)
  localStorage.setItem('arr',JSON.stringify(arr))
}

  let navigate = useNavigate()

  const login = ()=>{ 
    let data=arr.find((x) => (x.email == email && x.password == password))
    // console.log(arr)
      if(data){
        localStorage.setItem('isLogin',true)
        props.setisLogin(true)
        navigate('/')
      }
      else{
        alert('Invalid')
        // navigate('/register')
        // document.querySelector('#regBtn').classList.remove('d-none')
        // document.querySelector('#regBtn').classList.add('d-block')
        } 
  }

  // Register Buttton
  const register = () =>{
    navigate('/register')
  }

  return (
    <div className="container mt-5 ">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h3 className='font-monospace'>Login</h3>
          <form   className='rounded-2 p-2 shadow'>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name='email'
                placeholder="Enter your email"
                // value={obj.email}
                onChange={handleEmailChange} 
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                name='password'
                placeholder="Enter your password"
                // value={obj.password}
                onChange={handlePasswordChange} 
              />
            </div>
            <div className='mt-3 text-end'>
              <button type="button" onClick={login}  className="btn me-2 btn-primary">Submit</button>
              <button type="button" id='regBtn' onClick={register}  className=" btn btn-dark d">Register</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default F5_LoginForm;
