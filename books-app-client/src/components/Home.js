
import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux'

// this component displays all the books added to the catalog 
function Home(props) {

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

    const handleAddToCart = (book) => {
        props.onBookAddedToCart(book)
    }

    const bookItems = books.map(book => {
        return <li key = {book.id} className='book'>
                <img src={book.imageURL} />
                <label>{book.title}</label>
                {props.isAuth ?  <button className='add-to-cart-button' onClick={() => handleAddToCart(book)}>Add To Cart</button> : null }
            </li>
    })

    return (
        <ul className = 'books'>
            {bookItems}
        </ul>
    )

}

const mapStateToProps = (state) => {
    return {
        isAuth: state.authReducer.isAuthenticated 
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onBookAddedToCart: (book) => dispatch({type: 'ON_BOOK_ADDED_TO_CART', payload: book})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)