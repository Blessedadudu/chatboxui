import React from 'react';
import navlogo from '../../assets/logo.svg';
import './Navbar.scss';
import analytics from '../../assets/analytics.svg';
import happy from '../../assets/happy.svg';
import schedule from '../../assets/schedule.svg';
import comment from '../../assets/comment.svg';

const togglehamburger = () => {
    let sss = document.getElementById('nav_link');
      sss.classList.toggle('opened');
  };

const Navbar = () => { 
    return (
        <div>
        <nav className="nav_icon">
            <img src={navlogo} className="navlogo" alt="logo" />
            <div className="organisation">
                <span className="s">S</span><h1>Organisation Name</h1>
                <i class="fa fa-chevron-down" onClick={togglehamburger}></i>
            </div>
        </nav>
        <ul className="nav_link" id="nav_link">
            <li> 
                <img src={analytics} alt="analytics"/>
            </li>
            <li> 
                <img src={happy} alt="happy"/>
            </li>
            <li> 
                <img src={schedule} alt="schedule"/>
            </li>
            <li> 
                <img src={comment} alt="comment"/>
            </li>
        </ul>
            
        </div>
    )
}

export default Navbar;