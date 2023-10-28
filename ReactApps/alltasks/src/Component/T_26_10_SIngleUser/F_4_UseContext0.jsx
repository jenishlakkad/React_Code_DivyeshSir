// Date:-26/10/23
// Day:- Thursday
// Topic:- Single User
import React, { createContext, useContext, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import C_Navigation from './F_Navigation'
import F_2_Form from './F_2_Form'
import F_3_Table from './F_3_Table'
import F_6_User from './F_6_User'

export const data =  createContext()
const F_4_UseContext0 = () => {
    let [arr, setArr] = useState([])
    let [obj, setObj] = useState({})
    let [blankObj, setblankObj] = useState({})
    let [count, setCount] = useState(0)
    
    //User Obj
    const [objData, setobjData] = useState({})

    //Valid State
    let [hobbyValid, setHobbyValid] = useState('')
    let [mailValid, setMailValid] = useState('')
    let [conValid, setConValid] = useState('')

    // For Prarams
    const [pra, setpra] = useState({})
  return (
    <>
        <data.Provider value={{arr,setArr,obj,setObj,blankObj,setblankObj,count,setCount,hobbyValid,setHobbyValid,mailValid,setMailValid,conValid,setConValid}}>
          <BrowserRouter>
            <C_Navigation/>
              <Routes>
                <Route path='/form' element={<F_2_Form setobjData={setobjData} />}/>
                <Route path='/table' element={<F_3_Table setpra={setpra} />}/>
                <Route path='/user' element={<F_6_User pra={pra} />}/>
              </Routes>
          </BrowserRouter>
        </data.Provider>
    </>
  )
}

export default F_4_UseContext0