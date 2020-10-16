import React from 'react'

import './style.css'

function Index(props) {
    return (
        <div className="ma-container ma-grid">
            {props.children}
        </div>
    )
}

export default Index