import { useNavigate } from "react-router-dom";

import { Alert, IconButton, Stack, Typography } from "@mui/material";
import {
    ArrowBackRounded,
    CloudDoneOutlined,
    CloudOffOutlined,
    CloudSyncOutlined,
} from "@mui/icons-material";
import { IJournalEntry } from "../../../models/IJournalEntry";

const ComposeEditorHeader = ({
    entryData,
    isAutoSaving,
    showAutoSaveAlert,
    autoSaveAlertMessage,
}: {
    entryData: IJournalEntry;
    isAutoSaving: boolean;
    showAutoSaveAlert: boolean;
    autoSaveAlertMessage: string;
}) => {
    const navigate = useNavigate();

    return (
        <Stack alignItems="center">
            <Stack
                width="100%"
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
                ) : showAutoSaveAlert ? (
                    <Stack direction="row" alignItems="center">
                        <Alert
                            severity="error"
                            sx={{
                                display: { xs: "none", md: "flex" },
                                marginRight: 2,
                                paddingX: 1,
                                paddingY: 0.25,
                            }}
                        >
                            {autoSaveAlertMessage}
                        </Alert>
                        <CloudOffOutlined
                            sx={{
                                color: theme => theme.palette.secondary.main,
                            }}
                        />
                    </Stack>
                ) : (
                    <CloudDoneOutlined
                        sx={{
                            color: theme => theme.palette.secondary.main,
                        }}
                    />
                )}
            </Stack>
            {showAutoSaveAlert && (
                <Alert
                    severity="error"
                    sx={{
                        display: { md: "none" },
                        marginTop: 1,
                        paddingX: 1,
                        paddingY: 0.25,
                    }}
                >
                    {autoSaveAlertMessage}
                </Alert>
            )}
        </Stack>
    );
};

export default ComposeEditorHeader;
