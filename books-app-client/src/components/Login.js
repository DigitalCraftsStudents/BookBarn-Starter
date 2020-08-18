
import React, {useState} from 'react'

function Login(props) {

    const [loginInfo, setLoginInfo] = useState({})

    const handleTextChange = (e) => {
        setLoginInfo({
            ...loginInfo, 
            [e.target.name]: e.target.value 
        })
    }

    const handleLogin = () => {

        fetch('localhost:3001/api/login',{
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json'
            }, 
            body: JSON.stringify(loginInfo)
        }).then(response => response.json())
        .then(result => {
            if(result.success) {
                // take the user to the login page
                props.history.push('/login')
            } else {
                // show error message 
            }
        })

    }

    return (
        <div id="container">
        <h1>Login</h1>
        <input name="title" type="text" placeholder="User name" onChange={handleTextChange}></input>
        <input name="genre" type="password" placeholder="Password" onChange={handleTextChange}></input>
        <button onClick={handleLogin}>Login</button>

    </div>
    )
}

export default Login 