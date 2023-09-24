import { useContext } from "react";
import { AuthContext } from "./contexts/AuthContext";
import { Navigate } from "react-router-dom";
import { IAuthContext } from "./models/IAuthContext";

const PrivateRoute = ({
    children,
    userShouldBe,
}: {
    children: React.PropsWithChildren<JSX.Element>;
    userShouldBe: "loggedIn" | "loggedOut";
}): JSX.Element => {
    const authContext = useContext(AuthContext);
    const { isLoggedIn } = authContext as IAuthContext;

    if (userShouldBe === "loggedIn") {
        return isLoggedIn ? children : <Navigate to="/login" />;
    } else if (userShouldBe === "loggedOut") {
        return isLoggedIn ? <Navigate to="/" /> : children;
    } else {
        return <Navigate to="/" />;
    }
};

export default PrivateRoute;
