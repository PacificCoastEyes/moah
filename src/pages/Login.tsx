import { useEffect } from "react";
import Footer from "../components/global/Footer";
import Header from "../components/global/Header";
import WallpaperWrapper from "../components/global/WallpaperWrapper";
import LoginForm from "../components/Login/LoginForm";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Login = () => {
    useEffect(() => {
        document.title = "Login | Moah.";
    }, []);

    return (
        <div id="login" className="page">
            <Header />
            <WallpaperWrapper>
                <Box
                    width={{ xs: "90%", md: "20%" }}
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                    marginY={3}
                >
                    <Typography
                        marginBottom={1}
                        variant="h4"
                        fontFamily="'Lilita One', Arial, sans-serif"
                        color="#769469"
                    >
                        Log in to Moah.
                    </Typography>
                    <Typography marginBottom={1} variant="body1">
                        Don't have an account yet?{" "}
                        <Link to="/signup">Sign up</Link>
                    </Typography>
                    <LoginForm />
                </Box>
            </WallpaperWrapper>
            <Footer />
        </div>
    );
};

export default Login;
