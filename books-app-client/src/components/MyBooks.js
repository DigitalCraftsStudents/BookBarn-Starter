
import React, {useState, useEffect} from 'react'
import './MyBooks.css';

function MyBooks() {

    const [books, setBooks] = useState([])

    useEffect(() => {
        
        // get the books and then set to the local state 
        populateBooks() 

    },[])

    const populateBooks = () => {
        getAllBooks().then(books => setBooks(books))
    }

    const getAllBooks = async () => {
        let response = await fetch('http://localhost:3001/api/books') 
        return response.json()
    }

    const deleteBookById = async (bookId) => {
        let response = await fetch(`http://localhost:3001/api/books/${bookId}`,{
        method: 'DELETE',    
        headers: {
            'Content-Type': 'application/json'
            }
        })
        return response.json() 
    }

    const handleBookDelete = (bookId) => {

        // use the book Id to delete the book 
        deleteBookById(bookId)
        .then(result => {
            console.log(result)
            if(result.success) {
                // refresh all the books 
                populateBooks() 
            }
        })

    }

    const bookItems = books.map(book => {
        return <li key = {book.id} className='book'>
                <img src={book.imageURL} />
                <label>{book.title}</label>
                <button className='delete-book-button' onClick={() => handleBookDelete(book.id)}>Delete</button>
            </li>
    })

    return (
        <ul className = 'books'>
            {bookItems}
        </ul>
    )

}

export default MyBooks 