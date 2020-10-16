import React, { Fragment, useState } from 'react'

import { FaBars, FaWindowClose } from 'react-icons/fa'


function Menu(props) {

    const [openMenu, setOpenMenu] = useState('ma-invisible')
    const [closedMenu, setclosedMenu] = useState('')

    function menuDisplay() {
        if (openMenu == 'ma-invisible') {
            setOpenMenu('')
            setclosedMenu('ma-invisible')
        } else {
            setOpenMenu('ma-invisible')
            setclosedMenu('')
        }
    }

    return (
        <Fragment>
            <div className={`ma-menu-open ${openMenu}`} >
                <a href="#ma-section-skills" title="Facebook" onClick={e => menuDisplay()} >< FaWindowClose size="30" /></a>
            </div>
            <div className={`ma-header-logo ${closedMenu}`}></div>
            <div className={`ma-header-menu ${closedMenu}`}>
                <div>
                    <a href="#ma-section-skills" title="Facebook" onClick={e => menuDisplay()}>< FaBars size="30" /></a>
                    <span className="ma-btn-menu">MENU</span>
                </div>
            </div>
        </Fragment>
    )
}

export default Menu