import { Button, TextField } from "@mui/material";

interface ILoginForm {
    loginEmail: string;
    loginPassword: string;
}

const LoginForm = ({
    loginFormData,
    handleChange,
}: {
    loginFormData: ILoginForm;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
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
