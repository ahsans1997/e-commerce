import { useContext } from "react";
import { StateContext } from "../contexts/ContextProvider";

const useAuth = () => useContext(StateContext);

export default useAuth;