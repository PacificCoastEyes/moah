import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { Stack, Typography } from "@mui/material";
import { IAuthContext } from "../../models/IAuthContext";
const JournalGreeting = () => {
    const authContext = useContext(AuthContext);
    const { firstName } = authContext as IAuthContext;

    return (
        <Stack marginBottom={3}>
            <Typography
                variant="h2"
                fontSize={{ xs: "3.5em" }}
                color="primary"
                fontFamily="'Lilita One', Arial, sans-serif"
            >
                Hey, {firstName}! 👋
            </Typography>
            <Typography
                variant="h3"
                fontSize={{ xs: "2.5em" }}
                color="secondary"
                fontFamily="'Lilita One', Arial, sans-serif"
            >
                Let's journal.
            </Typography>
        </Stack>
    );
};

export default JournalGreeting;
