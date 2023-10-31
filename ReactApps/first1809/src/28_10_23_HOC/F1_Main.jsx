import React, { useState } from 'react'
import F2_Dashboard from './F2_Dashboard'
import './HOC.css'
import { BrowserRouter, Navigate, Route, Router, Routes } from 'react-router-dom'
import F3_Student from './F3_Student'
import F4_Staff from './F4_Staff'
import F5_LoginForm from './F5_LoginForm'
import { HOC } from './HOC'
import F6_RegisterForm from './F6_RegisterForm'

const F1_Main = () => {
  // let isLogin = true;
  // let isLogin = JSON.parse(localStorage.getItem(false))
  const [isLogin, setisLogin] = useState(JSON.parse(localStorage.getItem('isLogin')))
  // const [isLogin, setisLogin] = useState(true)
  return (
    <>
        <BrowserRouter>
          <Routes>
            {
              isLogin ?
              <>
               <Route path='/' element={<Navigate to="/dashboard"/>}/>
                <Route path='/dashboard' element={<F2_Dashboard  setisLogin={setisLogin}/>}/>
                <Route path='/student' element={<F3_Student/>}/>
                <Route path='/staff' element={<F4_Staff/>}/>
              </>:
              <>
                <Route path='/' element={<Navigate to="/login"/>}/>
                <Route path='/login' element={<F5_LoginForm setisLogin={setisLogin}/>}/>
              </>
            } 
            <Route path='/register' element={<F6_RegisterForm  />}/>
                {/* <Route path='/login' element={<F5_LoginForm/>}/> */}

          </Routes>
        </BrowserRouter>
        {/* <F5_LoginForm/> */}
        
    </>
  )
}

export default F1_Main