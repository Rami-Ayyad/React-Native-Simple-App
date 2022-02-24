import { createContext, useReducer } from "react";
import { reducer } from "../reducers/reducer";

export const UsersDataContext = createContext();

export default UsersDataContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, {
        usersList: [],
        singleUser: []
    })
    return (
        <UsersDataContext.Provider value={{ state, dispatch }}>
            {children}
        </UsersDataContext.Provider>
    )
}