import React from 'react'

import Menu from './Menu'

import './style.css'

function Header(props) {
    return (
        <div className="ma-header">
            <div className="ma-left">
                <Menu />
            </div>
            <div className="ma-right">
                <div className="ma-block"></div>
            </div>
        </div>
    )
}

export default Header