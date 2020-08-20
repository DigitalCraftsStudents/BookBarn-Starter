
import React, { useState } from 'react'
import './AddNewBook.css'
import { connect } from 'react-redux'
import { getDefaultHeaders } from '../authentication/defaultHeaders'

function AddNewBook(props) {

    const [book, setBook] = useState({})

    const handleTextChange = (e) => {
        setBook({
            ...book, 
            [e.target.name]: e.target.value 
        })
    }

    const handleSaveBook = () => {
        saveBook() 
    }

    const saveBook = async () => {

        book.userId = props.userId 

        const response = await fetch('http://localhost:3001/api/books',{
            method: 'POST', 
            headers: getDefaultHeaders(), 
            body: JSON.stringify(book)
        })

        const result = await response.json()
        console.log(result)
        if(result.id) {
            // take the user to the home screen
            props.history.push('/') 
        } else {
            // show error message on the screen 
        }

    }

    return (
        <div id="container">
            <h1>Add New Book</h1>
            <input name="title" type="text" placeholder="Title" onChange={handleTextChange}></input>
            <input name="genre" type="text" placeholder="Genre" onChange={handleTextChange}></input>
            <input name="publisher" type="text" placeholder="Publisher" onChange={handleTextChange}></input>
            <input name="year" type="text" placeholder="Year" onChange={handleTextChange}></input>
            <input name="imageURL" type="text" placeholder="Image URL" onChange={handleTextChange}></input>
            <button onClick={handleSaveBook}>Save</button>

        </div>
    )

}

const mapStateToProps = (state) => {
    return {
        userId: state.authReducer.userId 
    }
}

export default connect(mapStateToProps)(AddNewBook)