
import React from 'react'
import './Menu.css'

function Menu() {
    return (
        <div id="menu">
            <div>Home</div>
            <div>Add New Book</div>
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