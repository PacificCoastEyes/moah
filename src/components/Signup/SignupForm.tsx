import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../utils/AxiosInstance";
import { AxiosError } from "axios";
import PasswordStrengthBar, {
    PasswordFeedback,
} from "react-password-strength-bar";
import { Alert, Button, CircularProgress, TextField } from "@mui/material";

import { LogUserIn } from "../../utils/LogUserIn";

import { AuthContext } from "../../contexts/AuthContext";
import { IAuthContext } from "../../models/IAuthContext";

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

    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

    const [showAlert, setShowAlert] = useState<boolean>(false);
    const [alertMessage, setAlertMessage] = useState<string>("");

    const authContext = useContext(AuthContext);
    const { setIsLoggedIn, setFirstName } = authContext as IAuthContext;

    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setShowAlert(false);
        setAlertMessage("");
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
        setShowAlert(false);
        setAlertMessage("");
        let signupFormDataIsValid = false;
        signupFormDataIsValid = validateSignupFormData();
        if (signupFormDataIsValid) {
            setIsSubmitting(true);
            try {
                const res = await axios.post("/Auth/signup", {
                    FirstName: signupFormData.firstName,
                    Email: signupFormData.email,
                    Password: signupFormData.password,
                });
                const data = await res.data;
                LogUserIn(data, setFirstName, setIsLoggedIn, navigate);
            } catch (err) {
                console.error(err);
                setAlertMessage(
                    err instanceof AxiosError && err.response
                        ? err.response.data
                        : "Oops! There was a problem signing you up. Are you offline?"
                );
                setShowAlert(true);
            } finally {
                setIsSubmitting(false);
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
                    "Sign Up"
                )}
            </Button>
        </form>
    );
};

export default SignupForm;
