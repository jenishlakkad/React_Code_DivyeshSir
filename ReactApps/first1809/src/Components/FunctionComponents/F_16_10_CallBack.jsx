import React, { useCallback, useState } from 'react'
import F_16_10_CallBack2 from './F_16_10_CallBack2'

const F_16_10_CallBack = () => {
    const [add, setadd] = useState(1)
    const handleChange = useCallback(() => {

    },[])
  return (
    <>
    <div>
        {add}
    </div>
        <F_16_10_CallBack2 x={handleChange}/>
        <button onClick={() =>(setadd(add+1))}>CallBack</button>
    </>
  )
}

export default F_16_10_CallBack