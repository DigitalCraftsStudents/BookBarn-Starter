
import React, { Component } from 'react'
import { connect } from 'react-redux'

export default function (ComposedComponent) {

    class Authenticate extends Component {

        componentWillMount() {
            console.log('this.props')
            console.log(this.props)
            console.log('componentWillMount')
            if (!this.props.isAuthenticated) {
                // take the user to login screen 
                this.props.history.push('/login')
            }

        }

        render() {
            return (
                <ComposedComponent {...this.props} />
            )
        }

    }

    const mapStateToProps = (state) => {
        return {
            isAuthenticated: state.authReducer.isAuthenticated
        }
    }

    return connect(mapStateToProps)(Authenticate)
}