import React from 'react'
import '../styles/Sidebar.css';
import MiniBio from './MiniBio';

function SideBar() {
    return (
        <div className="sidebar-custom-border-box">
            <div className="sidebar-custom-element-box">
                <MiniBio/>
            </div>
        </div>
    )
}

export default SideBar
