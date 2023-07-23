import { useCallback, useEffect, useState } from "react";
import { Box } from "@mui/material";
import Header from "../components/global/Header";
import WallpaperWrapper from "../components/global/WallpaperWrapper";
import BreathBox from "../components/BoxBreathing/BreathBox";
import BreathCircle from "../components/BoxBreathing/BreathCircle";
import Footer from "../components/global/Footer";
import "../styles/pages/BoxBreathing.css";

const BoxBreathing = () => {
    useEffect(() => {
        document.title = "Box Breathing | Moah.";
    }, []);

    const [breathBoxPhaseIndex, setBreathBoxPhaseIndex] = useState<number>(0);

    const breathBoxPhases: string[] = ["inhale", "hold1", "exhale", "hold2"];

    const rotateBreathBoxPhase = useCallback(() => {
        if (breathBoxPhaseIndex === 3) {
            setBreathBoxPhaseIndex(0);
        } else {
            setBreathBoxPhaseIndex(breathBoxPhaseIndex + 1);
        }
    }, [breathBoxPhaseIndex]);

    useEffect(() => {
        const interval = setInterval(rotateBreathBoxPhase, 4000);
        return () => clearInterval(interval);
    }, [rotateBreathBoxPhase]);

    return (
        <div id="box-breathing" className="page">
            <Header />
            <WallpaperWrapper>
                <Box
                    id="box-breathing-content"
                    width={{ xs: "95%", md: "75%" }}
                    display="flex"
                    flexDirection={{ xs: "column", md: "row" }}
                    justifyContent="space-evenly"
                    alignItems="center"
                >
                    <BreathBox phase={breathBoxPhases[breathBoxPhaseIndex]} />
                    <BreathCircle
                        phase={breathBoxPhases[breathBoxPhaseIndex]}
                    />
                </Box>
            </WallpaperWrapper>
            <Footer />
        </div>
    );
};

export default BoxBreathing;
