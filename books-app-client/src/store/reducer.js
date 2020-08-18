
const initialState = {
    isAuthenticated: false 
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
    }

    return state 
}

export default reducer 