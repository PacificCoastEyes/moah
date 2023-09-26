import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../../utils/AxiosInstance";
import { AxiosError } from "axios";
import ArchiveListContainer from "./ArchiveListContainer";
import { Alert, CircularProgress, IconButton, Stack } from "@mui/material";
import { ArrowBackRounded } from "@mui/icons-material";
import { IJournalEntry } from "../../../models/IJournalEntry";

const ArchiveContainer = () => {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [entryList, setEntryList] = useState<IJournalEntry[]>([]);
    const [showAlert, setShowAlert] = useState<boolean>(false);
    const [alertMessage, setAlertMessage] = useState<string>("");

    const navigate = useNavigate();

    const getAllEntries = useCallback(async () => {
        try {
            const res = await axios.get("/Journal/get-all-entries", {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem(
                        "authToken"
                    )}`,
                },
            });
            const entries = await res.data;
            setEntryList(entries);
        } catch (err) {
            console.error(err);
            setAlertMessage(
                err instanceof AxiosError && err.response
                    ? err.response.data.length
                        ? err.response.data
                        : "Oops! There was a problem loading your journal entries."
                    : "Oops! There was a problem loading your journal entries. Are you offline?"
            );
            setShowAlert(true);
        } finally {
            setIsLoading(false);
        }
    }, []);

    useEffect(() => {
        getAllEntries();
    }, [getAllEntries]);

    return (
        <Stack
            height="100%"
            width={{ xs: "90%", md: "60%" }}
            justifyContent={isLoading ? "center" : "flex-start"}
            alignItems="center"
        >
            {isLoading ? (
                <CircularProgress size={100} thickness={4} />
            ) : showAlert ? (
                <Stack direction="row" alignItems="center" marginTop={2}>
                    <IconButton onClick={() => navigate("/journal")}>
                        <ArrowBackRounded />
                    </IconButton>
                    <Alert severity="error" sx={{ marginLeft: 1 }}>
                        {alertMessage}
                    </Alert>
                </Stack>
            ) : (
                <ArchiveListContainer
                    entryList={entryList}
                    setEntryList={setEntryList}
                />
            )}
        </Stack>
    );
};

export default ArchiveContainer;
