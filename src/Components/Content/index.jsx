import React from 'react'
import { Link } from 'react-router-dom'
import { FaCogs, FaHome, FaTable, FaUsers } from 'react-icons/fa'

import './style.css'

function Content(props) {
    return (
        <div className="ma-content">
            <div className="ma-content-menu">
                <ul>
                    <li>
                        <div className='ma-menu-item'>
                            <Link to="/" title="Home" >< FaHome size="25" /></Link>
                            <span>HOME</span>
                        </div>
                    </li>
                    <li>
                        <div className='ma-menu-item'>
                            <Link to="/sheets" title="Sheets" >< FaTable size="25" /></Link>
                            <span>Sheets</span>
                        </div>
                    </li>                    
                    <li>
                        <div className='ma-menu-item'>
                            <Link to="/menu" title="Setup" >< FaCogs size="25" /></Link>
                            <span>Setup</span>
                        </div>
                    </li>                                                            
                    <li>
                        <div className='ma-menu-item'>
                            <Link to="/create-user" title="Users" >< FaUsers size="25" /></Link>
                            <span>Users</span>
                        </div>
                    </li>                                                                                
                </ul>
            </div>
            <div className="ma-content-body">
                {props.children}
            </div>
        </div>
    )
}

export default Content