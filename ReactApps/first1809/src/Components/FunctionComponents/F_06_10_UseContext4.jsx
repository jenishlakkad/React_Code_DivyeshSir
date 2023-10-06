import React, { useContext } from 'react'
import UserContext from './F_06_10_UseContext'
const F_06_10_UseContext4 = (props) => {
    const user = useContext(UserContext);
  return (
    <>
        {/* <h1>{props.name} 4</h1>     */}
        <h1> {user}4</h1>    
    </>
  )
}

export default F_06_10_UseContext4