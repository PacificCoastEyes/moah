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

const InspirationContainer = ({
    quotes,
    selectedQuote,
    shuffleQuote,
}: {
    quotes: Quote[];
    selectedQuote: Quote;
    shuffleQuote: () => void;
}) => {
    return (
        <Box
            id="inspiration-container"
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
    );
};

export default InspirationContainer;
