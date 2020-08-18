
const initialState = {
    isAuthenticated: true, 
    cartItems: []
}

const reducer = (state = initialState, action) => {

    switch(action.type) {
        case 'ON_AUTHENTICATED': 
            return {
                ...state, 
                isAuthenticated: true 
            }
        case 'ON_LOGGED_OUT':
            return {
                ...state, 
                isAuthenticated: false 
            }
        case 'ON_BOOK_ADDED_TO_CART': 
            return {
                ...state, 
                cartItems: state.cartItems.concat(action.payload)
            }
    }

    return state 
}

export default reducer 