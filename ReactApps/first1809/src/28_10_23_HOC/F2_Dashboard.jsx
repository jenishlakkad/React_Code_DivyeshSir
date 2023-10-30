import React from "react";
import {NavLink} from 'react-router-dom'

const F2_Dashboard = () =>{
    return(
        <>
            <div className="main1">
                <div className="sideBar ps-5 pt-2  ">
                    <h4 className="mb-3">Dashboard</h4>
                    <ul className="list-unstyled">
                        <NavLink><li>Home</li></NavLink>
                        <NavLink to='/student' ><li>Student</li></NavLink>
                        <NavLink><li>Staff</li></NavLink>
                        <li>Office</li>
                    </ul>
                </div>
                <div className="header ms-auto ">
                    <div className="shadow p-2 d-flex ">
                        <input type="search " className="me-2 rounded-1  ms-auto" />
                        <input type="button" className="btn bg-dark-subtle" value="Sign In"/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default F2_Dashboard