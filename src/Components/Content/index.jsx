import React from 'react'

import './style.css'

function Content(props) {
    return (
        <div className="ma-content">
            <div className="ma-content-menu"></div>
            <div className="ma-content-body">
                {props.children}
            </div>
        </div>
    )
}

export default Content