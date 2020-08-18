
import React, {useState} from 'react'

function Register(props) {

    const [registrationInfo, setRegistrationInfo] = useState({})
    const [message, setMessage] = useState('')


    const handleTextChange = (e) => {
        setRegistrationInfo({
            ...registrationInfo, 
            [e.target.name]: e.target.value 
        })
    }

    const handleRegister = () => {

        fetch('http://localhost:3001/api/register',{
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json'
            }, 
            body: JSON.stringify(registrationInfo)
        }).then(response => response.json())
        .then(result => {
            console.log(result)
            if(result.success) {
                // take the user to the login page
                props.history.push('/login')
            } else {
                // show error message 
                setMessage(result.message)
            }
        })

    }

    return (
        <div id="container">
        <h1>Register</h1>
        <input name="username" type="text" placeholder="User name" onChange={handleTextChange}></input>
        <input name="password" type="password" placeholder="Password" onChange={handleTextChange}></input>
        <button onClick={handleRegister}>Register</button>
    <label>{message}</label>

    </div>
    )
}

export default Register 