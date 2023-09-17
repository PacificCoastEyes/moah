import { useCallback, useContext, useEffect, useState } from "react";
import { AuthContext } from "./contexts/AuthContext";
import axios from "./utils/AxiosInstance";
import Loading from "./pages/Loading";
import { Navigate } from "react-router-dom";
import { IAuthContext } from "./models/IAuthContext";

const PrivateRoute = ({
    userShouldBe,
    children,
}: {
    userShouldBe?: string;
    children: React.PropsWithChildren<JSX.Element>;
}): JSX.Element => {
    const authContext = useContext(AuthContext);
    const { isLoggedIn, setIsLoggedIn, setFirstName } =
        authContext as IAuthContext;

    const [isValidatingToken, setIsValidatingToken] = useState<boolean>(false);

    const validateToken = useCallback(async () => {
        setIsValidatingToken(true);
        try {
            const res = await axios.get("/Auth/validate-token", {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem(
                        "authToken"
                    )}`,
                },
            });
            const { firstName } = await res.data;
            setFirstName(firstName);
            setIsLoggedIn(true);
        } catch (err) {
            console.error(err);
        } finally {
            setIsValidatingToken(false);
        }
    }, [setIsLoggedIn, setFirstName]);

    useEffect(() => {
        if (!isLoggedIn) validateToken();
    }, [validateToken, isLoggedIn]);

    if (isValidatingToken) {
        return <Loading />;
    } else {
        if (userShouldBe === "loggedIn") {
            return isLoggedIn ? children : <Navigate to="/login" />;
        } else if (userShouldBe === "loggedOut") {
            return isLoggedIn ? <Navigate to="/journal" /> : children;
        } else {
            return children;
        }
    }
};

export default PrivateRoute;
