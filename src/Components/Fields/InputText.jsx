import React from 'react'

import './style.css'

function InputText(props) {
    return (
        <input type="text" 
               className="ma-input" 
               placeholder={props.placeholder}
               name={props.name}
               onChange={props.onChange}
        ></input>
    )
}

export default InputText