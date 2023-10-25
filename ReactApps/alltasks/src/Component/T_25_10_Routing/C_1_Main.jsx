// Date:- 25/10/23
// Day:- Wednesday
// Topic:- To make a form in one component and show that data in another component
//         with the use of routing
import React from 'react'
import C_Navigation from './C_Navigation'
import {BrowserRouter, Route, Router, Routes} from 'react-router-dom'
import C_2_Home from './C_2_Home'
import C_3_Form from './C_3_Form'
import C_4_Table from './C_4_Table'
import C_5_UseContext from './C_5_UseContext'

const C_1_Main = () => {
  return (
    <>
        {/* <BrowserRouter>
          <C_Navigation/>
            <Routes>
              <Route path='/home' element={<C_2_Home/>}/>
              <Route path='/form' element={<C_3_Form/>}/>
              <Route path='/tabel' element={<C_4_Table/>}/>
            </Routes>
        </BrowserRouter> */}
        <C_5_UseContext/>
    </>
  )
}

export default C_1_Main