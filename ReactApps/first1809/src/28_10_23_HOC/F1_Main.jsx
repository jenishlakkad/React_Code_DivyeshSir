import React from 'react'
import F2_Dashboard from './F2_Dashboard'
import './HOC.css'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import F3_Student from './F3_Student'

const F1_Main = () => {
  return (
    <>
        <BrowserRouter>
        <F2_Dashboard/>
          <Routes>
            <Route path='/' element={<F2_Dashboard/>}/>
            <Route path='/student' element={<F3_Student/>}/>
          </Routes>
        </BrowserRouter>
        
    </>
  )
}

export default F1_Main