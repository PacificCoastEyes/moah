import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../utils/AxiosInstance";
import { AxiosError } from "axios";
import { Alert, Button, CircularProgress, TextField } from "@mui/material";

import { AuthContext } from "../../contexts/AuthContext";
import { IAuthContext } from "../../models/IAuthContext";
import { LogUserIn } from "../../utils/LogUserIn";

interface ILoginForm {
    email: string;
    password: string;
}

const LoginForm = () => {
    const [loginFormData, setLoginFormData] = useState<ILoginForm>({
        email: "",
        password: "",
    });

    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

    const [showAlert, setShowAlert] = useState<boolean>(false);
    const [alertMessage, setAlertMessage] = useState<string>("");

    const authContext = useContext(AuthContext);
    const { setIsLoggedIn, setFirstName } = authContext as IAuthContext;

    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setShowAlert(false);
        setAlertMessage("");
        setLoginFormData({ ...loginFormData, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setShowAlert(false);
        setAlertMessage("");
        setIsSubmitting(true);
        try {
            const res = await axios.post(
                "http://localhost:5194/api/Auth/login",
                {
                    Email: loginFormData.email,
                    Password: loginFormData.password,
                }
            );
            const data = await res.data;
            LogUserIn(data, setFirstName, setIsLoggedIn, navigate);
        } catch (err) {
            console.error(err);
            setAlertMessage(
                err instanceof AxiosError && err.response
                    ? err.response.data
                    : "Oops! There was a problem logging you in. Are you offline?"
            );
            setShowAlert(true);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form id="login-form" onSubmit={handleSubmit}>
            <TextField
                id="email"
                required
                value={loginFormData.email}
                onChange={handleChange}
                margin="dense"
                fullWidth
                variant="filled"
                label="Email"
                type="email"
            />
            <TextField
                id="password"
                required
                value={loginFormData.password}
                onChange={handleChange}
                margin="dense"
                fullWidth
                variant="filled"
                label="Password"
                type="password"
            />
            {showAlert && (
                <Alert severity="error" sx={{ marginY: 1 }}>
                    {alertMessage}
                </Alert>
            )}
            <Button
                type="submit"
                fullWidth
                variant="contained"
                disabled={isSubmitting}
                sx={{ marginTop: showAlert ? 0 : 1 }}
            >
                {isSubmitting ? (
                    <CircularProgress size={25} color="primary" />
                ) : (
                    "Log In"
                )}
            </Button>
        </form>
    );
};

export default LoginForm;
