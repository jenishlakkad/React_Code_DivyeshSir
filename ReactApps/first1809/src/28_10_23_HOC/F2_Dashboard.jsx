import React from "react";
import {NavLink} from 'react-router-dom'
import { HOC } from "./HOC";
import { HOC2 } from "./HOC2";

const F2_Dashboard = (props) =>{
    // console.log(props.pro.setisLogin)

    return(
        <>
            <h1>DashBoard</h1>
            
        </>
    )
}

// export default HOC2(HOC(F2_Dashboard))
export default HOC(F2_Dashboard)    
