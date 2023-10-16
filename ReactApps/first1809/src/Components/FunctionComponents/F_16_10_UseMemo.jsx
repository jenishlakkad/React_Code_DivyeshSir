import React, { useMemo, useState } from 'react'

const F_16_10_UseMemo = () => {
    const [add, setadd] = useState(1)
    const [sub, setsub] = useState(100)

    const handleChange = useMemo(() =>{
        console.log('Unnecessary');
    },[add])

    // useEffect(() => {
    //   first
    
    //   return () => {
    //     second
    //   }
    // }, [third])
    
  return (
    <>
        {handleChange}
        <div>
           Add: {add}
        </div>
        <div>
          Sub:  {sub}
        </div>
        <button onClick={() => (setadd(add+1))}>setadd</button>
        <button onClick={() => (setsub(sub-1))}>setsub</button>
    </>
  )
}

export default F_16_10_UseMemo