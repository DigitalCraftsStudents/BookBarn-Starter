
import * as actionTypes from '../actions/actionTypes'

export const setAuthenticationStatus = (userId, isAuthenticated) => {
    return {
        type: actionTypes.ON_AUTHENTICATED, 
        payload: {
            userId: userId, 
            authenticated: isAuthenticated
        }
    }
}

export const addBookToCart = (book) => {
    return {
        type: actionTypes.ON_BOOK_ADDED_TO_CART, 
        payload: book
    }
}

export const logout = () => {
    return {
        type: actionTypes.ON_LOGGED_OUT
    }
}


