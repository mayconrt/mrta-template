import React from 'react'
import Container from '../Containers'

import imgLogo from '../../assets/loogo-medio.png'

import './style.css'

function Logo(props) {
    return (
        <Container>
            <img src={imgLogo} alt={props.alt} />
        </Container>
    )
}

export default Logo