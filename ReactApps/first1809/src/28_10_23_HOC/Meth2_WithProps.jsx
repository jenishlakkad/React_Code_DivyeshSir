import React from 'react'
import { NavLink } from 'react-router-dom'

const Meth2_WithProps = (props) => {
  return (
            <>
            <div className="main1">
            <div className="sideBar ps-5 pt-2  ">
                <h4 className="mb-3">Dashboard</h4>
                <ul className="list-unstyled">
                    <NavLink  to='/dashboard' ><li>Dashboard</li></NavLink>
                    <NavLink to='/student' ><li>Student</li></NavLink>
                    <NavLink  to='/Staff' ><li>Staff</li></NavLink>
                </ul>
            </div>
            <div className="header ms-auto ">
                    <div className="shadow p-2 d-flex ">
                        <input type="search" placeholder="Search..." className="me-2 rounded-3 p-2" />
                        <input type="button" className="btn bg-dark-subtle  ms-auto " value="Sign In"/>
                    </div>
                <div className="m-2">
                    {props.children}
                </div>
            </div>
        </div>
        </>
  )
}

export default Meth2_WithProps