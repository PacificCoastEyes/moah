import { useEffect } from "react";
import Header from "../components/global/Header";
import SoundscapeMenu from "../components/Soundscapes/SoundscapeMenu";
import Footer from "../components/global/Footer";
import WallpaperWrapper from "../components/global/WallpaperWrapper";
import { Box, Typography } from "@mui/material";

const Soundscapes = () => {
    useEffect(() => {
        document.title = "Soundscapes | Moah.";
    }, []);

    return (
        <div id="soundscapes" className="page">
            <Header />
            <WallpaperWrapper>
                <Box
                    id="soundscapes-content"
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
            </WallpaperWrapper>
            <Footer />
        </div>
    );
};

export default Soundscapes;
