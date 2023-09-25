import { Dispatch, SetStateAction } from "react";
import { useNavigate } from "react-router-dom";
import ReactQuill from "react-quill";
import { Box, IconButton, Stack, Typography } from "@mui/material";
import { ArrowBackRounded, CloudDoneOutlined } from "@mui/icons-material";

import "react-quill/dist/quill.snow.css";
import "../../../styles/components/ComposeEditor.css";
import { IJournalEntry } from "../../../models/IJournalEntry";

const ComposeEditor = ({
    entryData,
    setEntryData,
}: {
    entryData: IJournalEntry;
    setEntryData: Dispatch<SetStateAction<IJournalEntry>>;
}) => {
    const navigate = useNavigate();

    const handleChange = (value: string) => {
        setEntryData(prevState => {
            return { ...prevState!, content: value };
        });
    };

    return (
        <Stack width="100%" height="100%" marginY={3}>
            <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
            >
                <Stack direction="row" alignItems="center">
                    <IconButton onClick={() => navigate("/journal")}>
                        <ArrowBackRounded />
                    </IconButton>
                    <Typography
                        variant="h5"
                        marginLeft={0.5}
                        color="primary"
                        fontFamily="'Lilita One', Arial, sans-serif"
                    >
                        {entryData.created_at}
                    </Typography>
                </Stack>
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
                    "& p": { color: "black", fontSize: "1.25em" },
                    "& .ql-toolbar.ql-snow, .ql-container.ql-snow": {
                        borderColor: theme => theme.palette.primary.main,
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
                    value={entryData.content}
                    onChange={handleChange}
                    theme="snow"
                    style={{
                        height: "calc(100% - 42.5px)",
                    }}
                />
            </Box>
        </Stack>
    );
};

export default ComposeEditor;
