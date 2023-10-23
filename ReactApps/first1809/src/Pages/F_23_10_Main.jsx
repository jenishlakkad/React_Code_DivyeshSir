import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import F_23_10_Routing2 from './F_23_10_Routing2'
import F_23_10_Routing3 from './F_23_10_Routing3'
import F_23_10_Routing4 from './F_23_10_Routing4'
import F_23_10_Form from './F_23_10_Form'
import F_23_10_NevigationBar from './F_23_10_NevigationBar'

const F_23_10_Main = () => {
  return (
    <> 
        <BrowserRouter>
            <F_23_10_NevigationBar/>
              <Routes>
                <Route path='/F_23_10_Routing2' element={<F_23_10_Routing2/>}/>
                <Route path='/F_23_10_Routing3' element={<F_23_10_Routing3/>}/>
                <Route path='/F_23_10_Routing4' element={<F_23_10_Routing4/>}/>
                <Route path='/F_23_10_Form' element={<F_23_10_Form/>}/>
              </Routes>                
        </BrowserRouter>
    
    </>
  )
}

export default F_23_10_Main