
import React, {useState} from 'react'
import { connect } from 'react-redux'

function Login(props) {

    const [loginInfo, setLoginInfo] = useState({})
    const [message, setMessage] = useState('')

    const handleTextChange = (e) => {
        setLoginInfo({
            ...loginInfo, 
            [e.target.name]: e.target.value 
        })
    }

    const handleLogin = () => {

        fetch('http://localhost:3001/api/login',{
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json'
            }, 
            body: JSON.stringify(loginInfo)
        }).then(response => response.json())
        .then(result => {
            console.log(result)
            if(result.success) {
                // updat the redux state isAuthenticated = true 
                props.onAuthenticated() 
                // take the user to the login page
                props.history.push('/my-books')
            } else {
                // show error message 
                setMessage(result.message)
            }
        })

    }

    return (
        <div id="container">
        <h1>Login</h1>
        <input name="username" type="text" placeholder="User name" onChange={handleTextChange}></input>
        <input name="password" type="password" placeholder="Password" onChange={handleTextChange}></input>
        <button onClick={handleLogin}>Login</button>
        <label>{message}</label>

    </div>
    )
}

const mapDispatchToProps =  (dispatch) => {
    return {
        onAuthenticated: () => dispatch({type: 'ON_AUTHENTICATED'})
    }
}

export default connect(null, mapDispatchToProps)(Login)