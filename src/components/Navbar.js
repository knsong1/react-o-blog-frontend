import React from 'react'; 
import { NavLink } from 'react-router-dom'

function Navbar() {
    return (
        <div className='navWrapper'>
            <div className="sidebar" style={{textDecoration: 'none'}}>    
                <div className='navLinks' > <NavLink to="/login">Login</NavLink></div> 
                <div className='navLinks'>  <NavLink to="/">Home</NavLink></div>
                <div className='navLinks'> <NavLink to="/favorites"> Favorites</NavLink></div>
                <div className='navLinks'> <NavLink to="/posts"> Post </NavLink></div>
            </div>
        </div>


    )
}

export default Navbar;