import { createContext, useReducer } from "react";
import UserReducer from "./userReducer";

const INITIAL_STATE = {
    user: null,
};

export const UserContext = createContext(INITIAL_STATE);

export const UserContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(UserReducer, INITIAL_STATE);

    return <UserContext.Provider value={{ ...state, dispatch }}>{children}</UserContext.Provider>;
};
