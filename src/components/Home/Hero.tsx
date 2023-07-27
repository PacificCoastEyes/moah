import { useState, useEffect } from "react";
import { Box, Grid, Skeleton, Typography } from "@mui/material";
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
        <Box id="hero" maxWidth={{ xs: "initial", md: "60%" }} marginY="auto">
            <Grid
                container
                justifyContent="center"
                rowSpacing={5}
                padding={{ xs: "20px", md: "50px 200px" }}
            >
                <Grid item xs={12} md={6} alignSelf="center">
                    <Typography id="hero-for" variant="h2" textAlign="center">
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
                        src="https://moahstorage.blob.core.windows.net/assets/images/hero/desert-sunset.jpg"
                        onLoad={() => handleOnLoad("desertSunset")}
                        style={
                            displayHeroImages
                                ? { display: "block" }
                                : { display: "none" }
                        }
                        alt="Desert sunset"
                    />
                    {!displayHeroImages && (
                        <Skeleton variant="rounded" width={200} height={133} />
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
                            id="hero-the"
                            variant="h2"
                            textAlign="center"
                        >
                            the
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
                            src="https://moahstorage.blob.core.windows.net/assets/images/hero/forest.jpg"
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
                                height={133}
                            />
                        )}
                    </Grid>
                </Grid>
                <Grid item xs={12} md={6} alignSelf="center">
                    <Typography id="hero-mind" variant="h2" textAlign="center">
                        mind.
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
                        src="https://moahstorage.blob.core.windows.net/assets/images/hero/water-ripple.jpg"
                        onLoad={() => handleOnLoad("waterRipple")}
                        style={
                            displayHeroImages
                                ? { display: "block" }
                                : { display: "none" }
                        }
                        alt="Water ripples"
                    />
                    {!displayHeroImages && (
                        <Skeleton variant="rounded" width={200} height={133} />
                    )}
                </Grid>
            </Grid>
        </Box>
    );
};

export default Hero;
