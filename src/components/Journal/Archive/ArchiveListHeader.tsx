import { useNavigate } from "react-router-dom";

import { IconButton, Stack, Typography } from "@mui/material";
import { ArrowBackRounded } from "@mui/icons-material";

const ArchiveListHeader = ({ entryCount }: { entryCount: number }) => {
    const navigate = useNavigate();

    return (
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
                    Archive
                </Typography>
            </Stack>
            <Typography
                variant="h6"
                marginLeft={0.5}
                color="secondary"
                fontFamily="'Lilita One', Arial, sans-serif"
            >
                {`Journal entries: ${entryCount}`}
            </Typography>
        </Stack>
    );
};

export default ArchiveListHeader;
