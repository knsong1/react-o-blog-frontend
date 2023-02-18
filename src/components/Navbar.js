import React from 'react'; 
import { NavLink } from 'react-router-dom'

function Navbar() {
    return (
        <div className="wrapper">
        <div className="sidebar">
            <div className="profile">
    
            </div>
            <div>  <NavLink to="/">Home</NavLink></div>
            <div> <NavLink to="/login">Login</NavLink></div>
            <div> <NavLink to="/favorites"> Favorites</NavLink></div>
            <div> <NavLink to="/posts"> Post </NavLink></div>
        </div>
     
    </div>
    )
}

export default Navbar;