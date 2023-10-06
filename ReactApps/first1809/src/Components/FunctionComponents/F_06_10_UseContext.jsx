import React, { createContext, useState } from 'react'
import F_06_10_UseContext2 from './F_06_10_UseContext2'

export const UserContext = createContext();
const F_06_10_UseContext = () => {
    const [name, setname] = useState('Jenish Lakkad')

  return (
    <>
    <UserContext.Provider value={name}>
        {/* {console.log('working ')} */}
        <h1>{name}</h1>
        {/* <F_06_10_UseContext2 name ={name}/> */}
        <F_06_10_UseContext2/>
    </UserContext.Provider>

    </>
  )
}

export default F_06_10_UseContext