import { useCallback, useEffect, useState } from "react";
import Footer from "../components/global/Footer";
import Header from "../components/global/Header";
import WallpaperWrapper from "../components/global/WallpaperWrapper";
import InspirationContainer from "../components/Inspiration/InspirationContainer";
import axios from "../utils/AxiosInstance";

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
                "https://api.quotable.io/quotes/random?limit=50&maxLength=160",
                { withCredentials: false }
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
                <InspirationContainer
                    quotes={quotes!}
                    selectedQuote={selectedQuote!}
                    shuffleQuote={shuffleQuote}
                />
            </WallpaperWrapper>
            <Footer />
        </div>
    );
};

export default Inspiration;
