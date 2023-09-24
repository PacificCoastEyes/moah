import { useCallback, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "../../../utils/AxiosInstance";
import { AxiosError } from "axios";
import { Alert, CircularProgress, Stack, Typography } from "@mui/material";

import { IJournalEntry } from "../../../models/IJournalEntry";

const ComposeContainer = () => {
    const [isInitializing, setIsInitializing] = useState<boolean>(true);
    const [entryData, setEntryData] = useState<IJournalEntry>();
    const [showAlert, setShowAlert] = useState<boolean>(false);
    const [alertMessage, setAlertMessage] = useState<string>("");

    const [searchParams, setSearchParams] = useSearchParams();

    const initializeEntry = useCallback(async () => {
        try {
            const res = await axios.get("/Journal/initialize-entry", {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem(
                        "authToken"
                    )}`,
                },
            });
            const entry = await res.data;
            console.log(entry);
            setEntryData({
                id: entry.id,
                created_at: new Date(
                    entry.metadata.creationTime
                ).toLocaleDateString(),
                content: "",
            });
            setSearchParams({ ...searchParams, id: entry.id });
        } catch (err) {
            console.error(err);
            setAlertMessage(
                err instanceof AxiosError && err.response
                    ? err.response.data
                    : "Oops! There was a problem getting a journal entry started. Are you offline?"
            );
            setShowAlert(true);
        } finally {
            setIsInitializing(false);
        }
    }, [setSearchParams, searchParams]);

    useEffect(() => {
        initializeEntry();
        // eslint-disable-next-line
    }, []);

    return (
        <Stack
            height="100%"
            justifyContent={isInitializing ? "center" : "flex-start"}
            padding={3}
        >
            {isInitializing ? (
                <CircularProgress size={100} thickness={4} />
            ) : showAlert ? (
                <Alert severity="error">{alertMessage}</Alert>
            ) : (
                <Typography variant="h3">{entryData?.created_at}</Typography>
            )}
        </Stack>
    );
};

export default ComposeContainer;
