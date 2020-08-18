
import React, { useEffect } from 'react'
import { connect } from 'react-redux'

function Logout(props) {

    useEffect(() => {
        props.onLoggedOut() 
    },[])

    return (
        <h1>You are logged out of Book Barn</h1>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        onLoggedOut: () => dispatch({type: 'ON_LOGGED_OUT'})
    }
}

export default connect(null, mapDispatchToProps)(Logout)