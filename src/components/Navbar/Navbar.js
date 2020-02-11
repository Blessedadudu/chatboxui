import React from 'react';
import navlogo from '../../assets/logo.svg';
import './Navbar.scss';

const Navbar = () => {
    return (
        <div>
        <nav className="nav_icon">
            <img src={navlogo} className="navlogo" alt="logo" />
            <div className="organisation">
                <span className="s">S</span><h1>Organisation Name</h1>
                <i class="fa fa-chevron-down"></i>
            </div>
        </nav>
            
        </div>
    )
}

export default Navbar;