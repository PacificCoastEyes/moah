import { useEffect } from "react";
import Header from "../components/global/Header";
import WallpaperWrapper from "../components/global/WallpaperWrapper";
import JournalGreeting from "../components/Journal/JournalGreeting";
import JournalMenu from "../components/Journal/JournalMenu";
import Footer from "../components/global/Footer";
import { Stack } from "@mui/material";

const Journal = () => {
    useEffect(() => {
        document.title = "Journal | Moah.";
    }, []);

    return (
        <div id="journal" className="page">
            <Header />
            <WallpaperWrapper>
                <Stack
                    height={{ xs: "100%", md: "initial" }}
                    marginTop={{ xs: 6, md: "initial" }}
                    sx={{ maxWidth: { xs: "90%", md: "40%" } }}
                >
                    <JournalGreeting />
                    <JournalMenu />
                </Stack>
            </WallpaperWrapper>
            <Footer />
        </div>
    );
};

export default Journal;
