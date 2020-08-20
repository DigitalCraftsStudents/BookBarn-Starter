
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../store/creators/actionCreators'
import { setDefaultHeaders } from '../authentication/defaultHeaders'

function Logout(props) {

    useEffect(() => {
        props.onLoggedOut() 
        // remove the key from local storage 
        localStorage.removeItem("jsonwebtoken")
        // remove the authorization headers 
        setDefaultHeaders(null)
    },[])

    return (
        <h1>You are logged out of Book Barn</h1>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        onLoggedOut: () => dispatch(actionCreators.logout())
    }
}

export default connect(null, mapDispatchToProps)(Logout)