import { useNavigate } from "react-router-dom";
import SoundscapeList from "../../lib/SoundscapeList";
import { Button, Grid } from "@mui/material";

const SoundscapeMenu = () => {
    const navigate = useNavigate();

    return (
        <Grid
            container
            id="soundscape-menu"
            minHeight="400px"
            maxHeight="fit-content"
            width={{ xs: "100%", md: "500px" }}
            paddingBottom={{ xs: 0, md: 1 }}
            paddingRight={{ xs: 0, md: 1 }}
            spacing={{ xs: 0, md: 1 }}
            sx={{
                backgroundColor: "#769469",
                borderRadius: "10px",
            }}
        >
            {Object.values(SoundscapeList).map(soundscape => {
                return (
                    <Grid
                        item
                        xs={12}
                        md={6}
                        height={{ xs: "150px", md: "auto" }}
                        key={soundscape.id}
                        className="soundscape-menu-item"
                    >
                        <Button
                            onClick={() =>
                                navigate(
                                    `/soundscapes?selection=${soundscape.id}`
                                )
                            }
                            sx={{
                                height: "100%",
                                width: "100%",
                                borderRadius: { xs: 0, md: "5px" },
                                backgroundImage: `url("${soundscape.thumbnail}")`,
                                backgroundSize: "cover",
                                filter: { xs: "none", md: "grayscale(100%)" },
                                "&:hover": {
                                    filter: "none",
                                },
                                color: "white",
                                fontSize: "2em",
                                fontFamily: "'Lilita One', Arial, sans-serif",
                            }}
                        >
                            {soundscape.label}
                        </Button>
                    </Grid>
                );
            })}
        </Grid>
    );
};

export default SoundscapeMenu;
