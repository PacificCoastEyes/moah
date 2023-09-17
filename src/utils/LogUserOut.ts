import { Dispatch, SetStateAction } from "react";

export const LogUserOut = (
    setIsLoggedIn: Dispatch<SetStateAction<boolean>>,
    setFirstName: Dispatch<SetStateAction<string>>
) => {
    localStorage.removeItem("authToken");
    setFirstName("");
    setIsLoggedIn(false);
};
