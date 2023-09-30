// Date:- 21/09/23
// Day:- Wednesday
// Topic:- Functional componenets for first time 

import React, { useState } from 'react'

const FunctionComp2009 = () => {
    let [value,setvalue] = useState(1)

    const x = 23
    console.log(23);
    const changeData = () =>{
        value = value +1;
        setvalue(value)
        console.log(value);
    }
  return (
    <>
        <h1>Functional Comp:- {value}</h1>
        <button onClick={changeData}>Click</button>
    </>    
  )
}

export default FunctionComp2009
