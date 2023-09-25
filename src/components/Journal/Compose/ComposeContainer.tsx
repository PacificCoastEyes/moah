import { useCallback, useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import axios from "../../../utils/AxiosInstance";
import { AxiosError } from "axios";
import ComposeEditorContainer from "./ComposeEditorContainer";
import { Alert, CircularProgress, IconButton, Stack } from "@mui/material";
import { ArrowBackRounded } from "@mui/icons-material";
import { IJournalEntry } from "../../../models/IJournalEntry";

const ComposeContainer = () => {
    const blankJournalEntry: IJournalEntry = {
        id: "",
        created_at: "",
        content: "",
        snippet: "",
    };

    const [isInitializing, setIsInitializing] = useState<boolean>(true);
    const [entryData, setEntryData] =
        useState<IJournalEntry>(blankJournalEntry);
    const [showInitializeAlert, setShowInitializeAlert] =
        useState<boolean>(false);
    const [initializeAlertMessage, setInitializeAlertMessage] =
        useState<string>("");

    const [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate();

    const initializeExistingEntry = useCallback(async (entryId: string) => {
        try {
            const res = await axios.get(
                `/Journal/get-entry-by-id?id=${entryId}`,
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem(
                            "authToken"
                        )}`,
                    },
                }
            );
            const entry = await res.data;
            setEntryData({
                id: entry.id,
                created_at: new Date(
                    entry.metadata.creationTime
                ).toLocaleDateString(),
                content: entry.content,
                snippet: entry.snippet,
            });
        } catch (err) {
            console.error(err);
            setInitializeAlertMessage(
                err instanceof AxiosError && err.response
                    ? err.response.data.length
                        ? err.response.data
                        : "Oops! There was a problem loading your journal entry."
                    : "Oops! There was a problem loading your journal entry. Are you offline?"
            );
            setShowInitializeAlert(true);
        } finally {
            setIsInitializing(false);
        }
    }, []);

    const initializeNewEntry = useCallback(async () => {
        try {
            const res = await axios.post(
                "/Journal/initialize-entry",
                {},
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem(
                            "authToken"
                        )}`,
                    },
                }
            );
            const entry = await res.data;
            setEntryData(prevState => {
                return {
                    ...prevState,
                    id: entry.id,
                    created_at: new Date(
                        entry.metadata.creationTime
                    ).toLocaleDateString(),
                };
            });
            setSearchParams({ ...searchParams, id: entry.id });
        } catch (err) {
            console.error(err);
            setInitializeAlertMessage(
                err instanceof AxiosError && err.response
                    ? err.response.data.length
                        ? err.response.data
                        : "Oops! There was a problem getting a journal entry started."
                    : "Oops! There was a problem getting a journal entry started. Are you offline?"
            );
            setShowInitializeAlert(true);
        } finally {
            setIsInitializing(false);
        }
    }, [setSearchParams, searchParams]);

    useEffect(() => {
        const entryId = searchParams.get("id");
        if (entryId) {
            initializeExistingEntry(entryId);
        } else {
            initializeNewEntry();
        }
        // eslint-disable-next-line
    }, []);

    return (
        <Stack
            height="100%"
            width={{ xs: "90%", md: "60%" }}
            justifyContent={isInitializing ? "center" : "flex-start"}
            alignItems="center"
        >
            {isInitializing ? (
                <CircularProgress size={100} thickness={4} />
            ) : showInitializeAlert ? (
                <Stack direction="row" alignItems="center" marginTop={2}>
                    <IconButton onClick={() => navigate("/journal")}>
                        <ArrowBackRounded />
                    </IconButton>
                    <Alert severity="error" sx={{ marginLeft: 1 }}>
                        {initializeAlertMessage}
                    </Alert>
                </Stack>
            ) : (
                <ComposeEditorContainer
                    entryData={entryData}
                    setEntryData={setEntryData}
                />
            )}
        </Stack>
    );
};

export default ComposeContainer;
