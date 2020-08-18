
import React from 'react'
import './Menu.css'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

function Menu(props) {
    return (
        <div id="menu">
            <NavLink to = '/'>Home</NavLink>

            { props.isAuth ? null : <NavLink to = '/login'>Login</NavLink> }
            { props.isAuth ? null : <NavLink to = '/register'>Register</NavLink> }

            { props.isAuth ? <NavLink to = '/my-books'>My Books</NavLink> : null }
            { props.isAuth ?  <NavLink to = '/add-book'>Add New Book</NavLink> : null }
            { props.isAuth ?  <NavLink to = '/logout'>Logout</NavLink> : null }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.isAuthenticated 
    }
}

export default connect(mapStateToProps)(Menu)