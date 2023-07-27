import { useState } from "react";
import { Button, TextField } from "@mui/material";

interface ILoginForm {
    loginEmail: string;
    loginPassword: string;
}

const LoginForm = () => {
    const [loginFormData, setLoginFormData] = useState<ILoginForm>({
        loginEmail: "",
        loginPassword: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLoginFormData({ ...loginFormData, [e.target.id]: e.target.value });
    };

    return (
        <form id="login-form">
            <TextField
                id="loginEmail"
                required
                value={loginFormData.loginEmail}
                onChange={handleChange}
                margin="dense"
                fullWidth
                variant="filled"
                label="Email"
                type="email"
            />
            <TextField
                id="loginPassword"
                required
                value={loginFormData.loginPassword}
                onChange={handleChange}
                margin="dense"
                fullWidth
                variant="filled"
                label="Password"
                type="password"
            />
            <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ marginTop: 2 }}
            >
                Login
            </Button>
        </form>
    );
};

export default LoginForm;
