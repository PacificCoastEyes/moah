import PasswordStrengthBar from "react-password-strength-bar";
import { Button, TextField } from "@mui/material";

interface ISignupForm {
    signupFirstName: string;
    signupEmail: string;
    signupPassword: string;
    signupConfirmPassword: string;
}

const SignupForm = ({
    signupFormData,
    handleChange,
}: {
    signupFormData: ISignupForm;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
    return (
        <form id="signup-form">
            <TextField
                id="signupFirstName"
                required
                value={signupFormData.signupFirstName}
                onChange={handleChange}
                margin="dense"
                fullWidth
                variant="filled"
                label="First Name"
            />
            <TextField
                id="signupEmail"
                required
                value={signupFormData.signupEmail}
                onChange={handleChange}
                margin="dense"
                fullWidth
                variant="filled"
                label="Email"
                type="email"
            />
            <TextField
                id="signupPassword"
                required
                value={signupFormData.signupPassword}
                onChange={handleChange}
                margin="dense"
                fullWidth
                variant="filled"
                label="Password"
                type="password"
            />
            <PasswordStrengthBar
                password={signupFormData.signupPassword}
                minLength={8}
                scoreWords={["Weak", "Weak", "Okay", "Good", "Strong"]}
                shortScoreWord="Too Short"
            />
            <TextField
                id="signupConfirmPassword"
                required
                value={signupFormData.signupConfirmPassword}
                onChange={handleChange}
                margin="dense"
                fullWidth
                variant="filled"
                label="Confirm Password"
                type="password"
            />
            <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ marginTop: 2 }}
            >
                Sign Up
            </Button>
        </form>
    );
};

export default SignupForm;
