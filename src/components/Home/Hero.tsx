import { useState, useEffect } from "react";
import { Box, Grid, Skeleton, Typography } from "@mui/material";
import DesertSunset from "../../images/desert-sunset.jpg";
import Forest from "../../images/forest.jpg";
import WaterRipple from "../../images/water-ripple.jpg";
import "../../styles/components/Hero.css";

interface LoadStatusObject {
    desertSunset: boolean;
    forest: boolean;
    waterRipple: boolean;
}

const Hero = () => {
    const [heroImageLoadStatus, setHeroImageLoadStatus] =
        useState<LoadStatusObject>({
            desertSunset: false,
            forest: false,
            waterRipple: false,
        });
    const [displayHeroImages, setDisplayHeroImages] = useState<boolean>(false);

    useEffect(() => {
        if (
            Object.values(heroImageLoadStatus).every(loadStatus => loadStatus)
        ) {
            setDisplayHeroImages(true);
        }
    }, [heroImageLoadStatus]);

    const handleOnLoad = (imageKey: string): void => {
        setHeroImageLoadStatus(prevState => {
            return { ...prevState, [imageKey]: true };
        });
    };

    return (
        <main id="hero">
            <Box maxWidth={{ xs: "initial", md: "60%" }}>
                <Grid
                    container
                    justifyContent="center"
                    rowSpacing={5}
                    padding={{ xs: "20px", md: "50px 200px" }}
                >
                    <Grid item xs={12} md={6} alignSelf="center">
                        <Typography
                            id="hero-for"
                            variant="h2"
                            textAlign="center"
                        >
                            For
                        </Typography>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        md={6}
                        display="flex"
                        justifyContent="center"
                    >
                        <img
                            src={DesertSunset}
                            onLoad={() => handleOnLoad("desertSunset")}
                            style={
                                displayHeroImages
                                    ? { display: "block" }
                                    : { display: "none" }
                            }
                            alt="Desert sunset"
                        />
                        {!displayHeroImages && (
                            <Skeleton
                                variant="rounded"
                                width={200}
                                height={100}
                            />
                        )}
                    </Grid>
                    <Grid
                        item
                        container
                        xs={12}
                        md={12}
                        rowSpacing={5}
                        flexDirection={{ xs: "initial", md: "row-reverse" }}
                    >
                        <Grid item xs={12} md={6} alignSelf="center">
                            <Typography
                                id="hero-your"
                                variant="h2"
                                textAlign="center"
                            >
                                Your
                            </Typography>
                        </Grid>
                        <Grid
                            item
                            display="flex"
                            xs={12}
                            md={6}
                            justifyContent="center"
                        >
                            <img
                                src={Forest}
                                onLoad={() => handleOnLoad("forest")}
                                style={
                                    displayHeroImages
                                        ? { display: "block" }
                                        : { display: "none" }
                                }
                                alt="Forest"
                            />
                            {!displayHeroImages && (
                                <Skeleton
                                    variant="rounded"
                                    width={200}
                                    height={100}
                                />
                            )}
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={6} alignSelf="center">
                        <Typography
                            id="hero-mind"
                            variant="h2"
                            textAlign="center"
                        >
                            Mind.
                        </Typography>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        md={6}
                        display="flex"
                        justifyContent="center"
                    >
                        <img
                            src={WaterRipple}
                            onLoad={() => handleOnLoad("waterRipple")}
                            style={
                                displayHeroImages
                                    ? { display: "block" }
                                    : { display: "none" }
                            }
                            alt="Water ripples"
                        />
                        {!displayHeroImages && (
                            <Skeleton
                                variant="rounded"
                                width={200}
                                height={100}
                            />
                        )}
                    </Grid>
                </Grid>
            </Box>
        </main>
    );
};

export default Hero;
