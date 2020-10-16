import React from 'react'

import './style.css'

function Link(props) {
    return (
        <div className="ma-link">
            <a href={props.href}>{props.children}</a>
        </div>
    )
}

export default Link