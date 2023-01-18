import React from 'react'
import './LeftSidebar.css'
import { NavLink } from 'react-router-dom'
import Globe from  '../../assets/Globe.svg'

const LeftSidebar=()=>{
    return(
        <div className="left_sidebar">
            <nav className="side_nav">
                <NavLink to="/" className="side_nav_links" activeClassName="active" >
                    <p>Home</p>
                </NavLink>
                <div className="side_nav_div">
                    <div><p>PUBLIC</p></div>
                    <NavLink to='/Questions' className="side_nav_links" activeClassName="active" style={{paddingLeft:"40px"}}>
                        <img src={Globe} alt="globe"/>
                        <p style={{paddingLeft:"10px"}}> Questions</p>
                    </NavLink>
                    <NavLink to="/Tags" className="side_nav_links" activeClassName="active" style={{paddingLeft:"40px"}}>
                        <p>Tags</p>
                    </NavLink>
                    <NavLink to="/Users" className="side_nav_links" activeClassName="active" style={{paddingLeft:"40px"}}>
                        <p>Users</p>
                    </NavLink>
                </div>
            </nav>
        </div>
    )
}
export default LeftSidebar
