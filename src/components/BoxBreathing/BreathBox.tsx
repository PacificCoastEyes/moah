import { Box, Typography } from "@mui/material";

const BreathBox = ({ phase }: { phase: string }) => {
    return (
        <Box
            id="breath-box"
            className={`breath-box-phase-${phase}`}
            height={{ xs: "200px", md: "300px" }}
            width={{ xs: "200px", md: "300px" }}
            display="flex"
            justifyContent="center"
            alignItems="center"
        >
            <Typography
                id="breath-box-text"
                className={`breath-box-phase-${phase}`}
                variant="h2"
                fontSize={{ xs: "2.5em", md: "3.75em" }}
                textAlign="center"
            ></Typography>
        </Box>
    );
};

export default BreathBox;
