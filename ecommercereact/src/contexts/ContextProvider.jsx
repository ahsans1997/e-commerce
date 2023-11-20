import { createContext, useState } from "react";

export const StateContext = createContext({
    token: null,
    setToken: () => {}
});

export const ContextProvider = ({ children }) => {
    const [token, _setToken] = useState(null);

    const setToken = (token) => {
        _setToken(token);
        if (token) {
            localStorage.setItem("ACCESS_TOKEN", token);
        } 
        else{
            localStorage.removeItem("ACCESS_TOKEN");
        }
    }



    return (
        <StateContext.Provider value={{ 
            token, 
            setToken 
        }}>
            {children}
        </StateContext.Provider>
    );
}
