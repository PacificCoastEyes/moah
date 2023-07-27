import { useEffect, useState } from "react";
import Footer from "../components/global/Footer";
import Header from "../components/global/Header";
import WallpaperWrapper from "../components/global/WallpaperWrapper";
import SignupForm from "../components/Signup/SignupForm";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

interface ISignupForm {
    signupFirstName: string;
    signupEmail: string;
    signupPassword: string;
    signupConfirmPassword: string;
}

const Signup = () => {
    useEffect(() => {
        document.title = "Signup | Moah.";
    }, []);

    const [signupFormData, setSignupFormData] = useState<ISignupForm>({
        signupFirstName: "",
        signupEmail: "",
        signupPassword: "",
        signupConfirmPassword: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSignupFormData({ ...signupFormData, [e.target.id]: e.target.value });
    };

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
                        Sign up for Moah.
                    </Typography>
                    <Typography marginBottom={1} variant="body1">
                        Already have an account? <Link to="/login">Login</Link>
                    </Typography>
                    <SignupForm
                        signupFormData={signupFormData}
                        handleChange={handleChange}
                    />
                </Box>
            </WallpaperWrapper>
            <Footer />
        </div>
    );
};

export default Signup;
