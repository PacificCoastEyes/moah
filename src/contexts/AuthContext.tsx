import { createContext, useState } from "react";
import { IAuthContext } from "../models/IAuthContext";

export const AuthContext = createContext<IAuthContext | null>(null);

const AuthContextProvider = ({ children }: React.PropsWithChildren) => {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    const [firstName, setFirstName] = useState<string>("");

    return (
        <AuthContext.Provider
            value={{ isLoggedIn, setIsLoggedIn, firstName, setFirstName }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;
