import { useNavigate } from "react-router-dom";

import { IconButton, Stack, Typography } from "@mui/material";
import {
    ArrowBackRounded,
    CloudDoneOutlined,
    CloudSyncOutlined,
} from "@mui/icons-material";
import { IJournalEntry } from "../../../models/IJournalEntry";

const ComposeEditorHeader = ({
    entryData,
    isAutoSaving,
}: {
    entryData: IJournalEntry;
    isAutoSaving: boolean;
}) => {
    const navigate = useNavigate();

    return (
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
            {isAutoSaving ? (
                <CloudSyncOutlined
                    sx={{
                        color: theme => theme.palette.secondary.main,
                    }}
                />
            ) : (
                <CloudDoneOutlined
                    sx={{
                        color: theme => theme.palette.secondary.main,
                    }}
                />
            )}
        </Stack>
    );
};

export default ComposeEditorHeader;
