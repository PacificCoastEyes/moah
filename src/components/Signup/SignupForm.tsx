import { useState } from "react";
import PasswordStrengthBar, {
    PasswordFeedback,
} from "react-password-strength-bar";
import { Button, TextField } from "@mui/material";

interface ISignupForm {
    signupFirstName: string;
    signupEmail: string;
    signupPassword: string;
    signupConfirmPassword: string;
}

interface IHasError {
    signupFirstName: boolean;
    signupEmail: boolean;
    signupPassword: boolean;
    signupConfirmPassword: boolean;
}

const SignupForm = () => {
    const [signupFormData, setSignupFormData] = useState<ISignupForm>({
        signupFirstName: "",
        signupEmail: "",
        signupPassword: "",
        signupConfirmPassword: "",
    });

    const [signupPasswordScore, setSignupPasswordScore] = useState<number>(0);

    const [helperMessages, setHelperMessages] = useState<ISignupForm>({
        signupFirstName: "",
        signupEmail: "",
        signupPassword: "",
        signupConfirmPassword: "",
    });

    const [hasError, setHasError] = useState<IHasError>({
        signupFirstName: false,
        signupEmail: false,
        signupPassword: false,
        signupConfirmPassword: false,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSignupFormData(prevState => {
            return { ...prevState, [e.target.id]: e.target.value };
        });
        setHelperMessages(prevState => {
            return { ...prevState, [e.target.id]: "" };
        });
        setHasError(prevState => {
            return { ...prevState, [e.target.id]: false };
        });
    };

    const handleChangeScore = (score: number, feedback: PasswordFeedback) => {
        setSignupPasswordScore(score);
        setHelperMessages({
            ...helperMessages,
            signupPassword: feedback.warning ? feedback.warning : "",
        });
        setHasError({
            ...hasError,
            signupPassword: feedback.warning ? true : false,
        });
    };

    const checkForEmptyFields = (): boolean => {
        let hasPassed = true;
        Object.keys(signupFormData).forEach(field => {
            if (!signupFormData[field as keyof typeof signupFormData]) {
                setHelperMessages(prevState => {
                    return {
                        ...prevState,
                        [field]: "This field is required",
                    };
                });
                setHasError(prevState => {
                    return { ...prevState, [field]: true };
                });
                hasPassed = false;
            }
        });
        return hasPassed;
    };

    const approvePassword = (): boolean => {
        if (signupPasswordScore < 2) {
            setHelperMessages(prevState => {
                return {
                    ...prevState,
                    signupPassword: "Password is not strong enough",
                };
            });
            setHasError(prevState => {
                return { ...prevState, signupPassword: true };
            });
            return false;
        }
        return true;
    };

    const checkPasswordsMatch = (): boolean => {
        if (
            signupFormData.signupPassword !==
            signupFormData.signupConfirmPassword
        ) {
            setHelperMessages(prevState => {
                return {
                    ...prevState,
                    signupConfirmPassword: "Passwords do not match",
                };
            });
            setHasError(prevState => {
                return { ...prevState, signupConfirmPassword: true };
            });
            return false;
        }
        return true;
    };

    const validateSignupFormData = (): boolean => {
        let fieldsAreNotEmpty = false;
        let passwordIsNotWeak = false;
        let passwordsMatch = false;
        fieldsAreNotEmpty = checkForEmptyFields();
        if (fieldsAreNotEmpty) {
            passwordIsNotWeak = approvePassword();
        }
        if (passwordIsNotWeak) {
            passwordsMatch = checkPasswordsMatch();
        }
        return fieldsAreNotEmpty && passwordIsNotWeak && passwordsMatch
            ? true
            : false;
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        let signupFormDataIsValid = false;
        signupFormDataIsValid = validateSignupFormData();
        if (signupFormDataIsValid) console.log("VALID!");
    };

    return (
        <form id="signup-form" onSubmit={handleSubmit}>
            <TextField
                id="signupFirstName"
                // required
                value={signupFormData.signupFirstName}
                onChange={handleChange}
                margin="dense"
                fullWidth
                variant="filled"
                label="First Name"
                helperText={helperMessages.signupFirstName}
                error={hasError.signupFirstName}
            />
            <TextField
                id="signupEmail"
                // required
                value={signupFormData.signupEmail}
                onChange={handleChange}
                margin="dense"
                fullWidth
                variant="filled"
                label="Email"
                type="email"
                helperText={helperMessages.signupEmail}
                error={hasError.signupEmail}
            />
            <TextField
                id="signupPassword"
                // required
                value={signupFormData.signupPassword}
                onChange={handleChange}
                margin="dense"
                fullWidth
                variant="filled"
                label="Password"
                type="password"
                helperText={helperMessages.signupPassword}
                error={hasError.signupPassword}
            />
            <PasswordStrengthBar
                password={signupFormData.signupPassword}
                minLength={8}
                scoreWords={["Weak", "Weak", "Okay", "Good", "Strong"]}
                shortScoreWord="Too Short"
                onChangeScore={handleChangeScore}
            />
            <TextField
                id="signupConfirmPassword"
                // required
                value={signupFormData.signupConfirmPassword}
                onChange={handleChange}
                margin="dense"
                fullWidth
                variant="filled"
                label="Confirm Password"
                type="password"
                helperText={helperMessages.signupConfirmPassword}
                error={hasError.signupConfirmPassword}
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
