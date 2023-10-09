import React, { createContext, useState } from 'react'
import F_09_10_Form_Context from './F_09_10_Form_Context'
import F_09_10_TableContext from './F_09_10_TableContext'

// import { createContext } from 'react';
export const jenish = createContext();
const F_09_10_MainContext = () => {
    let [obj, setobj] = useState({});
//   let [array, setarray] = useState([]);
  let [array, setarray] = useState(JSON.parse(localStorage.getItem('array')) || [])
    let [count, setcount] = useState(JSON.parse(localStorage.getItem('count')) || 0)
    let [blankObj, setblankObj] = useState({});

    return (
    <>
        <jenish.Provider value={{obj,setobj,array,setarray,count,setcount,blankObj,setblankObj}}>
            <F_09_10_Form_Context/>
            <F_09_10_TableContext/>
        </jenish.Provider>
    </>
  )
}

export default F_09_10_MainContext