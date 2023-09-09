import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Header from "../components/global/Header";
import WallpaperWrapper from "../components/global/WallpaperWrapper";
import SoundscapeMenuContainer from "../components/Soundscapes/SoundscapeMenuContainer";
import SoundscapePlayerContainer from "../components/Soundscapes/SoundscapePlayerContainer";
import SoundscapeList from "../lib/SoundscapeList";
import Footer from "../components/global/Footer";

const Soundscapes = () => {
    const navigate = useNavigate();

    useEffect(() => {
        document.title = "Soundscapes | Moah.";
    }, []);

    const [params] = useSearchParams();
    const [selection, setSelection] = useState<string | null>(null);

    useEffect(() => {
        const query = params.get("selection");
        if (Object.keys(SoundscapeList).includes(query as string)) {
            setSelection(query);
        } else {
            navigate("/soundscapes");
            setSelection(null);
        }
    }, [params, navigate]);

    return (
        <div id="soundscapes" className="page">
            <Header />
            {selection ? (
                <SoundscapePlayerContainer selection={selection} />
            ) : (
                <WallpaperWrapper>
                    <SoundscapeMenuContainer />
                </WallpaperWrapper>
            )}
            <Footer />
        </div>
    );
};

export default Soundscapes;
