import React from 'react'

import ContainerHeader from './header'

import './style.css'

function Index(props) {
    return (
        <div className="ma-container">
            <ContainerHeader title={props.title} />
            {props.children}
        </div>
    )
}

export default Index