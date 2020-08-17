
import React from 'react'
import './Menu.css'
import { NavLink } from 'react-router-dom'

function Menu() {
    return (
        <div id="menu">
            <NavLink to = '/'>Home</NavLink>
            <NavLink to = '/add-book'>Add New Book</NavLink>
        </div>
    )
}

function BaseLayout(props) {

    return (
        <div>
            <Menu />
            {props.children}
        </div>
    )

}

export default BaseLayout 