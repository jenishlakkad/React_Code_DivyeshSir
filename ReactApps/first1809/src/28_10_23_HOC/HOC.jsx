import { NavLink, Navigate, useNavigate } from "react-router-dom"

export const HOC = (Component) => {
    const NewComponent = (props) => {
        let navigate = useNavigate()
        const signOut = () =>{
            localStorage.setItem('isLogin',false)
            props.setisLogin(false)
            navigate('/')
        }
        return <>
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
                        <span className="ms-auto">
                            <NavLink to={'/login'}> 
                            <input type="button" className="btn bg-dark-subtle  ms-auto " onClick={signOut} value="Sign Out"/>
                            </NavLink>
                        </span>
                    </div>
                    <div className="m-2">
                        {/* <Component pro={props}/> */}
                        <Component pro={props}/>
                        {/* {console.log(props)} */}
                    </div>
                </div>
            </div>
        </>
    }
    return NewComponent
}