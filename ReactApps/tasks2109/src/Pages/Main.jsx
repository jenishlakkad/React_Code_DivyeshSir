// Date:-23/10/23
// Day:- Monday
// Topic:- Routing Task to show Show Form on one Page and show detail in 
//          table on another component

import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navigation from './Navigation'
import Home from './Home'
import Form from './Form'
import Table from './Table'

const Main = () => {
  return (
    <>
        <BrowserRouter>
        <Navigation/>
            <Routes>
                <Route  path='/Home' element={<Home/>}/>
                <Route  path='/Form' element={<Form/>}/>
                <Route  path='/Table' element={<Table/>}/>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default Main