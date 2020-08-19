
import * as actionTypes from '../actions/actionTypes'

const initialState = {
    cartItems: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ON_BOOK_ADDED_TO_CART:
            return {
                ...state,
                cartItems: state.cartItems.concat(action.payload)
            }
    }

    return state 
}

export default reducer 