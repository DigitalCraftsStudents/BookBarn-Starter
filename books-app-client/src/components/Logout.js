
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../store/creators/actionCreators'

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
        onLoggedOut: () => dispatch(actionCreators.logout())
    }
}

export default connect(null, mapDispatchToProps)(Logout)