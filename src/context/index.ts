import {createContext, Dispatch, SetStateAction} from "react";

interface AuthContextType {
    isAuth: boolean;
    setIsAuth: Dispatch<SetStateAction<boolean>>;
    isLoading:boolean;
}
const defaultAuthValue: AuthContextType = {
    isAuth: false,
    setIsAuth: () => {},
    isLoading: true
}
export const AuthContext = createContext(defaultAuthValue);
