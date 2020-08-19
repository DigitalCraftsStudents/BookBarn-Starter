
import * as actionTypes from '../actions/actionTypes'

const initialState = {
    isAuthenticated: false, 
    userId: null 
}

const reducer = (state = initialState, action) => {

    switch(action.type) {
        case actionTypes.ON_AUTHENTICATED: 
            return {
                ...state, 
                isAuthenticated: action.payload.authenticated, 
                userId: action.payload.userId
            }
        case actionTypes.ON_LOGGED_OUT:
            return {
                ...state, 
                isAuthenticated: false 
            }
    }

    return state 
}

export default reducer 