import { useCallback, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "../../../utils/AxiosInstance";
import { AxiosError } from "axios";
import ReactQuill, { UnprivilegedEditor } from "react-quill";
import { DeltaStatic, Sources } from "quill";
import { Alert, Box, CircularProgress, Stack, Typography } from "@mui/material";
import { CloudDoneOutlined } from "@mui/icons-material";
import { IJournalEntry } from "../../../models/IJournalEntry";

import "react-quill/dist/quill.snow.css";

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

    const handleChange = (
        value: string,
        delta: DeltaStatic,
        source: Sources,
        editor: UnprivilegedEditor
    ) => {
        setEntryData(prevState => {
            return { ...prevState!, content: value };
        });
    };

    return (
        <Stack
            height="100%"
            width={{ xs: "90%", md: "70%" }}
            justifyContent={isInitializing ? "center" : "flex-start"}
            alignItems="center"
        >
            {isInitializing ? (
                <CircularProgress size={100} thickness={4} />
            ) : showAlert ? (
                <Alert severity="error">{alertMessage}</Alert>
            ) : (
                <Stack width="100%" height="100%" marginY={3}>
                    <Stack
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                    >
                        <Typography
                            variant="h5"
                            color="primary"
                            fontFamily="'Lilita One', Arial, sans-serif"
                        >
                            {entryData?.created_at}
                        </Typography>
                        <CloudDoneOutlined
                            sx={{
                                color: theme => theme.palette.secondary.main,
                            }}
                        />
                    </Stack>
                    <Box
                        height="100%"
                        marginTop={3}
                        sx={{
                            backgroundColor: "white",
                            "& p": { color: "black", fontSize: "1.5em" },
                            "& .ql-toolbar.ql-snow, .ql-container.ql-snow": {
                                borderColor: theme =>
                                    theme.palette.primary.main,
                            },
                            "& .ql-toolbar": {
                                borderRadius: "10px 10px 0 0",
                            },
                            "& .ql-container": {
                                borderRadius: "0 0 10px 10px",
                            },
                        }}
                    >
                        <ReactQuill
                            value={entryData?.content}
                            onChange={handleChange}
                            theme="snow"
                            style={{
                                height: "calc(100% - 42.5px)",
                            }}
                        />
                    </Box>
                </Stack>
            )}
        </Stack>
    );
};

export default ComposeContainer;
