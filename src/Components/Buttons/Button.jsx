import React from 'react'

import './style.css'

function Button(props) {
    return (
        <button
            type="button"
            className="ma-button"
            onClick={()=> props.onClick()}
        >{props.text}</button>
    )
}

export default Button