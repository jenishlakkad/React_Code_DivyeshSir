// Date:-25/10/23
// Day:- wednesday
// Topic:- UseContext
import React, { createContext, useContext, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import C_Navigation from './C_Navigation'
import C_2_Home from './C_2_Home'
import C_3_Form from './C_3_Form'
import C_4_Table from './C_4_Table'
export const data =  createContext()

const C_5_UseContext = () => {
  let [arr, setArr] = useState([])
    let [obj, setObj] = useState({})
    let [blankObj, setblankObj] = useState({})
    let [count, setCount] = useState(0)

    //Valid State
    let [hobbyValid, setHobbyValid] = useState('')
    let [mailValid, setMailValid] = useState('')
    let [conValid, setConValid] = useState('')
  return (
    <>
        <data.Provider value={{arr,setArr,obj,setObj,blankObj,setblankObj,count,setCount,hobbyValid,setHobbyValid,mailValid,setMailValid,conValid,setConValid}}>
          <BrowserRouter>
            <C_Navigation/>
              <Routes>
                {/* <Route path='/home' element={<C_2_Home/>}/> */}
                <Route path='/form' element={<C_3_Form/>}/>
                <Route path='/table' element={<C_4_Table/>}/>
              </Routes>
          </BrowserRouter>
        </data.Provider>
    </>
  )
}

export default C_5_UseContext