import { useState } from "react";
import axios from "../../utils/AxiosInstance";
import PasswordStrengthBar, {
    PasswordFeedback,
} from "react-password-strength-bar";
import { Button, TextField } from "@mui/material";

interface ISignupForm {
    firstName: string;
    email: string;
    password: string;
    confirmPassword: string;
}

interface IHasError {
    firstName: boolean;
    email: boolean;
    password: boolean;
    confirmPassword: boolean;
}

const SignupForm = () => {
    const [signupFormData, setSignupFormData] = useState<ISignupForm>({
        firstName: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const [signupPasswordScore, setSignupPasswordScore] = useState<number>(0);

    const [helperMessages, setHelperMessages] = useState<ISignupForm>({
        firstName: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const [hasError, setHasError] = useState<IHasError>({
        firstName: false,
        email: false,
        password: false,
        confirmPassword: false,
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
            password: feedback.warning ? feedback.warning : "",
        });
        setHasError({
            ...hasError,
            password: feedback.warning ? true : false,
        });
    };

    const checkForEmptyFields = (): boolean => {
        let hasPassed = true;
        Object.keys(signupFormData).forEach(field => {
            if (!signupFormData[field as keyof typeof signupFormData].trim()) {
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
                    password: "Password is not strong enough",
                };
            });
            setHasError(prevState => {
                return { ...prevState, password: true };
            });
            return false;
        }
        return true;
    };

    const checkPasswordsMatch = (): boolean => {
        if (signupFormData.password !== signupFormData.confirmPassword) {
            setHelperMessages(prevState => {
                return {
                    ...prevState,
                    confirmPassword: "Passwords do not match",
                };
            });
            setHasError(prevState => {
                return { ...prevState, confirmPassword: true };
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

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        let signupFormDataIsValid = false;
        signupFormDataIsValid = validateSignupFormData();
        if (signupFormDataIsValid) {
            try {
                const res = await axios.post(
                    "http://localhost:5008/User/signup",
                    {
                        firstName: signupFormData.firstName,
                        email: signupFormData.email,
                        password: signupFormData.password,
                        confirmPassword: signupFormData.confirmPassword,
                    }
                );
                console.log(res.data);
            } catch (err) {
                console.log("There was an error", err);
            }
        }
    };

    return (
        <form id="signup-form" onSubmit={handleSubmit}>
            <TextField
                id="firstName"
                value={signupFormData.firstName}
                onChange={handleChange}
                margin="dense"
                fullWidth
                variant="filled"
                label="First Name"
                helperText={helperMessages.firstName}
                error={hasError.firstName}
            />
            <TextField
                id="email"
                value={signupFormData.email}
                onChange={handleChange}
                margin="dense"
                fullWidth
                variant="filled"
                label="Email"
                type="email"
                helperText={helperMessages.email}
                error={hasError.email}
            />
            <TextField
                id="password"
                value={signupFormData.password}
                onChange={handleChange}
                margin="dense"
                fullWidth
                variant="filled"
                label="Password"
                type="password"
                helperText={helperMessages.password}
                error={hasError.password}
            />
            {signupFormData.password && (
                <PasswordStrengthBar
                    password={signupFormData.password}
                    minLength={8}
                    scoreWords={["Weak", "Weak", "Okay", "Good", "Strong"]}
                    shortScoreWord="Too Short"
                    onChangeScore={handleChangeScore}
                />
            )}
            <TextField
                id="confirmPassword"
                value={signupFormData.confirmPassword}
                onChange={handleChange}
                margin="dense"
                fullWidth
                variant="filled"
                label="Confirm Password"
                type="password"
                helperText={helperMessages.confirmPassword}
                error={hasError.confirmPassword}
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
