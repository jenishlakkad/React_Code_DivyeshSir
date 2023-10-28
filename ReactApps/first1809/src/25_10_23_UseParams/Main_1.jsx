import React, { useState } from 'react'
import NavBar_4 from './NavBar_4'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Alluser_2 from './Alluser_2'
import User_3 from './User_3'

const Main_1 = () => {
    const [obj, setobj] = useState({})
  return (
    <>
        <BrowserRouter>
                <NavBar_4/>     
              <Routes>
                {/* <Route path='/AllUser' element={<Alluser_2 setobj={setobj}/>}/>
                <Route path='/user' element={<User_3 obj={obj}/>}> */}
                <Route path='/AllUser' element={<Alluser_2 />}/>
                <Route path='/user' element={<User_3 />}>
                    <Route path=':userId'/>
                </Route>
                <Route path='*' element={<h1>Page Not Found 404</h1>}/>
                {/* <Route path='/F_23_10_Routing4' element={<F_23_10_Routing4/>}/>
                <Route path='/F_23_10_Form' element={<F_23_10_Form/>}/> */}
              </Routes>                
        </BrowserRouter>   
    </>
  )
}

export default Main_1