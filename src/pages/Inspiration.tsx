import { useCallback, useEffect, useState } from "react";
import Footer from "../components/global/Footer";
import Header from "../components/global/Header";
import WallpaperWrapper from "../components/global/WallpaperWrapper";
import axios from "../utils/AxiosInstance";
import { Box, CircularProgress, IconButton, Typography } from "@mui/material";
import { CasinoOutlined } from "@mui/icons-material";

interface Quote {
    author: string;
    authorSlug?: string;
    content: string;
    dateAdded?: string;
    dateModified?: string;
    length?: number;
    tags?: string[];
    _id?: string;
}

const Inspiration = () => {
    useEffect(() => {
        document.title = "Inspiration | Moah.";
    }, []);

    const [quotes, setQuotes] = useState<Quote[] | null>(null);
    const [selectedQuote, setSelectedQuote] = useState<Quote | null>(null);
    const [currentQuoteIndex, setCurrentQuoteIndex] = useState<number | null>(
        null
    );

    const calculateRandomQuoteIndex = () => {
        return Math.floor(Math.random() * 50);
    };

    const fetchQuotes = useCallback(async () => {
        try {
            const res = await axios(
                "https://api.quotable.io/quotes/random?limit=50&maxLength=160"
            );
            setQuotes(res.data);
            const randomQuoteIndex = calculateRandomQuoteIndex();
            setCurrentQuoteIndex(randomQuoteIndex);
            setSelectedQuote(res.data[randomQuoteIndex]);
        } catch (err) {
            console.log(err);
            setSelectedQuote({
                author: "Your Internet Connection",
                content:
                    "Being offline is virtuous. But quotes come to those who are online.",
            });
        }
    }, []);

    useEffect(() => {
        fetchQuotes();
    }, [fetchQuotes]);

    const shuffleQuote = () => {
        let randomQuoteIndex = calculateRandomQuoteIndex();
        while (randomQuoteIndex === currentQuoteIndex) {
            // Prevent same quote from being shown twice in row
            randomQuoteIndex = calculateRandomQuoteIndex();
        }
        setCurrentQuoteIndex(randomQuoteIndex);
        setSelectedQuote(quotes![randomQuoteIndex]);
    };

    return (
        <div id="inspiration" className="page">
            <Header />
            <WallpaperWrapper>
                <Box
                    width={{ xs: "90%", md: "70%" }}
                    marginTop={{ xs: 5, md: 3 }}
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                >
                    {selectedQuote ? (
                        <Box
                            height="100%"
                            marginBottom={6}
                            display="flex"
                            flexDirection="column"
                            justifyContent={{
                                xs: "space-between",
                                md: "center",
                            }}
                            alignItems="center"
                        >
                            <Box display="flex" flexDirection="column">
                                <Typography
                                    variant="h3"
                                    fontSize={{ xs: "2rem", md: "3rem" }}
                                    fontFamily="'Lilita One', Arial, sans-serif"
                                    color="#769469"
                                >
                                    {selectedQuote.content}
                                </Typography>
                                <Typography
                                    variant="h4"
                                    alignSelf="flex-end"
                                    textAlign="right"
                                    marginTop={4}
                                    fontSize={{ xs: "1.43rem", md: "2.125rem" }}
                                    fontFamily="'Lilita One', Arial, sans-serif"
                                    color="#aaa"
                                >
                                    {selectedQuote.author}
                                </Typography>
                            </Box>
                            {quotes && quotes.length > 1 && (
                                <IconButton
                                    onClick={shuffleQuote}
                                    sx={{
                                        marginTop: 4,
                                        position: {
                                            xs: "relative",
                                            md: "absolute",
                                        },
                                        bottom: { md: "75px" },
                                        boxShadow: "0 2px 10px 2px #999",
                                        padding: "4px",
                                    }}
                                >
                                    <CasinoOutlined
                                        sx={{
                                            height: "75px",
                                            width: "75px",
                                            fill: "white",
                                            backgroundColor: "#769469",
                                            padding: "10px",
                                            borderRadius: "50%",
                                        }}
                                    />
                                </IconButton>
                            )}
                        </Box>
                    ) : (
                        <CircularProgress
                            size={100}
                            thickness={4}
                            sx={{ alignSelf: "center" }}
                        />
                    )}
                </Box>
            </WallpaperWrapper>
            <Footer />
        </div>
    );
};

export default Inspiration;
