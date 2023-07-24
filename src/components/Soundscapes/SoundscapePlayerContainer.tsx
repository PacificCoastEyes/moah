import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, IconButton } from "@mui/material";
import SoundscapeList from "../../lib/SoundscapeList";
import {
    ArrowCircleLeftOutlined,
    PauseCircleOutline,
    PlayCircleOutlined,
} from "@mui/icons-material";
import "../../styles/components/SoundscapePlayerContainer.css";

const SoundscapePlayerContainer = ({ selection }: { selection: string }) => {
    const navigate = useNavigate();
    const [isPlaying, setIsPlaying] = useState<boolean>(false);

    const player = useMemo(
        () => new Audio(SoundscapeList[selection]["audio"]),
        [selection]
    );
    player.loop = true;

    useEffect(() => {
        if (isPlaying) {
            player.play();
        } else {
            player.pause();
        }
        return () => {
            player.pause();
        };
    }, [isPlaying, player]);

    return (
        <Box
            id="soundscape-player-container"
            className={selection}
            width="100%"
            display="flex"
            justifyContent="center"
            alignItems="center"
            sx={{
                backgroundImage: `url(${SoundscapeList[selection]["image"]})`,
                backgroundSize: "cover",
            }}
        >
            <IconButton onClick={() => navigate("/soundscapes")}>
                <ArrowCircleLeftOutlined id="soundscape-back" />
            </IconButton>
            <IconButton onClick={() => setIsPlaying(!isPlaying)}>
                {isPlaying ? (
                    <PauseCircleOutline id="soundscape-pause" />
                ) : (
                    <PlayCircleOutlined id="soundscape-play" />
                )}
            </IconButton>
        </Box>
    );
};

export default SoundscapePlayerContainer;
