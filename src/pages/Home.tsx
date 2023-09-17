import { useContext, useEffect, useState } from "react";
import { LogUserOut } from "../utils/LogUserOut";
import Hero from "../components/Home/Hero";
import Footer from "../components/global/Footer";
import Header from "../components/global/Header";
import WallpaperWrapper from "../components/global/WallpaperWrapper";

import { Alert, Snackbar } from "@mui/material";

import { AuthContext } from "../contexts/AuthContext";
import { IAuthContext } from "../models/IAuthContext";

const Home = ({ isLoggingOut }: { isLoggingOut?: boolean }) => {
    useEffect(() => {
        document.title = "Moah.";
    }, []);

    const [showLogoutAlert, setShowLogoutAlert] = useState<boolean>(false);

    const authContext = useContext(AuthContext);
    const { setIsLoggedIn, setFirstName } = authContext as IAuthContext;

    useEffect(() => {
        if (isLoggingOut) setShowLogoutAlert(true);
        LogUserOut(setIsLoggedIn, setFirstName);
    }, [isLoggingOut, setIsLoggedIn, setFirstName]);

    return (
        <div id="home" className="page">
            <Header />
            <Snackbar
                open={showLogoutAlert}
                autoHideDuration={6000}
                onClose={() => setShowLogoutAlert(false)}
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
                sx={{ marginTop: { xs: "64px", md: "56px" } }}
            >
                <Alert
                    severity="success"
                    variant="filled"
                    onClose={() => setShowLogoutAlert(false)}
                    sx={{ width: { xs: "100%", md: "initial" } }}
                >
                    You have successfully logged out.
                </Alert>
            </Snackbar>
            <WallpaperWrapper>
                <Hero />
            </WallpaperWrapper>
            <Footer />
        </div>
    );
};

export default Home;
