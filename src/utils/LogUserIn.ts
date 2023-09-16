import { Dispatch, SetStateAction } from "react";
import { NavigateFunction } from "react-router-dom";
type User = {
    authToken: string;
    firstName: string;
};

export const LogUserIn = (
    user: User,
    setFirstName: Dispatch<SetStateAction<string>>,
    setIsLoggedIn: Dispatch<SetStateAction<boolean>>,
    navigate: NavigateFunction
) => {
    localStorage.setItem("authToken", user.authToken);
    setFirstName(user.firstName);
    setIsLoggedIn(true);
    navigate("/dashboard");
};
