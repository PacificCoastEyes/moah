import { useCallback, useContext, useEffect, useState } from "react";
import { AuthContext } from "./contexts/AuthContext";
import axios from "./utils/AxiosInstance";
import Loading from "./pages/Loading";
import { IAuthContext } from "./models/IAuthContext";

const RestoreSession = ({
    children,
}: {
    children: React.PropsWithChildren<JSX.Element>;
}): JSX.Element => {
    const authContext = useContext(AuthContext);
    const { isLoggedIn, setIsLoggedIn, setFirstName } =
        authContext as IAuthContext;

    const [isValidatingToken, setIsValidatingToken] = useState<boolean>(true);

    const validateToken = useCallback(async () => {
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
        if (!isLoggedIn) {
            validateToken();
        } else {
            // Need to initialize validating state to true above to "hold" the component momentarily before returning, or else private route will not work because isLoggedIn state won't be updated in time and the private route will divert to rejection path
            setIsValidatingToken(false);
        }
    }, [validateToken, isLoggedIn]);

    if (isValidatingToken) {
        return <Loading />;
    } else {
        return children;
    }
};

export default RestoreSession;
