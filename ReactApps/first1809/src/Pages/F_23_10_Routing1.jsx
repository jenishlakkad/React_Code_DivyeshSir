// Date:-23/10/23
// Day:- Monday
// Topic:- Routing 

import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import F_23_10_Routing2 from './F_23_10_Routing2'
import F_23_10_Routing3 from './F_23_10_Routing3'
import F_23_10_Routing4 from './F_23_10_Routing4'

const F_23_10_Routing1 = () => {
  return (
        <>
          <h1>Routing</h1>
            <BrowserRouter>
              <Routes>
                <Route path='/*' element={<F_23_10_Routing2/>}/>
                <Route path='/3' element={<F_23_10_Routing3/>}/>
                <Route path='/4' element={<F_23_10_Routing4/>}/>
              </Routes>                
            </BrowserRouter>
        </>
    )
}

export default F_23_10_Routing1