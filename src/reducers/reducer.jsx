export const reducer = (state = {}, action) => {

    if (action.type == "USERS_DATA") {
        return { ...state, usersList: action.payload }
    }

    if (action.type == 'SINGLE_USER_DATA') {
        return { ...state, singleUser: action.payload }
    }

    if (action.type == 'ClEAR_DERAILS_STATE') {
        return { ...state, singleUser: action.payload }
    }
    
    return state
}