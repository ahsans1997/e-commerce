import { createContext, useState } from "react";
import Cookies from "js-cookie";

export const StateContext = createContext({
    token: null,
    setToken: () => {},
});

export const ContextProvider = ({ children }) => {
    const [token, _setToken] = useState(Cookies.get("ACCESS_TOKEN"));

    const setToken = (token) => {
        _setToken(token);
        const expirationInMinutes = 30;
        const expirationInMillis = expirationInMinutes * 60 * 1000;
        if (token) {
            Cookies.set("ACCESS_TOKEN", token, { expires: new Date(Date.now() + expirationInMillis) });
        } 
        else{
            Cookies.remove("ACCESS_TOKEN");
        }
    }



    return (
        <StateContext.Provider value={{ 
            token, 
            setToken, 
        }}>
            {children}
        </StateContext.Provider>
    );
}
