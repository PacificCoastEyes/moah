import { useEffect } from "react";
import Header from "../components/global/Header";
import WallpaperWrapper from "../components/global/WallpaperWrapper";
import Footer from "../components/global/Footer";

type Props = {};

const Journal = (props: Props) => {
    useEffect(() => {
        document.title = "Journal | Moah.";
    }, []);

    return (
        <div id="journal" className="page">
            <Header />
            <WallpaperWrapper>Hi from the dashboard!</WallpaperWrapper>
            <Footer />
        </div>
    );
};

export default Journal;
