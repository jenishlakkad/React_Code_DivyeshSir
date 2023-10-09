import React, { createContext, useState } from 'react'
import C_09_10_Form_Context from './C_09_10_Form_Context'
import C_09_10_TableContext from './C_09_10_TableContext'

// import { createContext } from 'react';
export const jenish = createContext();
const C_09_10_MainContext = () => {
    let [obj, setobj] = useState({});
//   let [array, setarray] = useState([]);
  let [array, setarray] = useState(JSON.parse(localStorage.getItem('array')) || [])
    let [count, setcount] = useState(JSON.parse(localStorage.getItem('count')) || 0)
    let [blankObj, setblankObj] = useState({});

    return (
    <>
        <jenish.Provider value={{obj,setobj,array,setarray,count,setcount,blankObj,setblankObj}}>
            <C_09_10_Form_Context/>
            <C_09_10_TableContext/>
        </jenish.Provider>
    </>
  )
}

export default C_09_10_MainContext