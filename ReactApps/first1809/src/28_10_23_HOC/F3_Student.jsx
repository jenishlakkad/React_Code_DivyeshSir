import React from "react";
import {NavLink} from 'react-router-dom'
import { HOC } from "./HOC";
import Meth2_WithProps from "./Meth2_WithProps";

const F3_Student = () =>{
    return(
        <>
            {/* <Meth2_WithProps> */}
                <h2>Student</h2>
            {/* </Meth2_WithProps> */}
        </>  
    )

}

export default HOC(F3_Student)
// export default F3_Student