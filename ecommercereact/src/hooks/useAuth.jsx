import { createContext } from "react";
import { StateContext } from "../contexts/ContextProvider";

const useAuth = () => createContext(StateContext);

export default useAuth;