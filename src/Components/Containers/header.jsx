import React from 'react'

import './style.css'

function Index(props) {
    return (
        <div className="ma-container-header">
            <h1>{props.title}</h1>
        </div>
    )
}

export default Index