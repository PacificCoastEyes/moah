import { Box, Typography } from "@mui/material";
import SoundscapeMenu from "./SoundscapeMenu";

const SoundscapeMenuContainer = () => {
    return (
        <Box
            id="soundscapes-menu-container"
            display="flex"
            flexDirection="column"
            justifyContent={{ xs: "flex-start", md: "center" }}
            alignItems="center"
            marginTop={3}
            marginBottom={{ xs: 0, md: 3 }}
        >
            <Typography
                variant="h4"
                marginBottom={3}
                sx={{
                    color: "#769469",
                    fontFamily: "'Lilita One', Arial, sans-serif",
                }}
            >
                Choose a Soundscape
            </Typography>
            <SoundscapeMenu />
        </Box>
    );
};

export default SoundscapeMenuContainer;
