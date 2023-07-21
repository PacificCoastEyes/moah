import { useCallback, useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import Footer from "../components/global/Footer";
import Header from "../components/global/Header";
import WallpaperWrapper from "../components/global/WallpaperWrapper";
import "../styles/pages/BoxBreathing.css";

const BoxBreathing = () => {
    useEffect(() => {
        document.title = "Box Breathing - Moah.";
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
        <div id="home" className="page">
            <Header />
            <WallpaperWrapper>
                <Box
                    width={{ xs: "95%", md: "75%" }}
                    display="flex"
                    flexDirection={{ xs: "column", md: "row" }}
                    justifyContent="space-evenly"
                    alignItems="center"
                >
                    <Box
                        id="breath-box"
                        className={`breath-box-phase-${breathBoxPhases[breathBoxPhaseIndex]}`}
                        height={{ xs: "200px", md: "300px" }}
                        width={{ xs: "200px", md: "300px" }}
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Typography
                            id="breath-box-text"
                            className={`breath-box-phase-${breathBoxPhases[breathBoxPhaseIndex]}`}
                            variant="h2"
                            fontSize={{ xs: "2.5em", md: "3.75em" }}
                            textAlign="center"
                        ></Typography>
                    </Box>
                    <svg
                        id="breath-circle-wrapper"
                        viewBox="0 0 100 100"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <circle
                            id="breath-circle"
                            className={`breath-box-phase-${breathBoxPhases[breathBoxPhaseIndex]}`}
                            cx="50"
                            cy="50"
                            r="15"
                        />
                    </svg>
                </Box>
            </WallpaperWrapper>
            <Footer />
        </div>
    );
};

export default BoxBreathing;
