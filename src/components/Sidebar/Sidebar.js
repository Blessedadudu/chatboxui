import React from 'react';
import './Sidebar.scss'
import analytics from '../../assets/analytics.svg';
import happy from '../../assets/happy.svg';
import schedule from '../../assets/schedule.svg';
import comment from '../../assets/comment.svg'

export default function Sidebar() {
    return (
        <div className="sidebar"> 
            <img src={analytics} alt="analytics"/>
            <img src={happy} alt="happy"/>  
            <img src={schedule} alt="schedule"/>
            <img src={comment} alt="comment"/>
        </div>
    )
}


