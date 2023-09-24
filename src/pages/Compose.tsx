import { useEffect } from "react";
import Header from "../components/global/Header";
import WallpaperWrapper from "../components/global/WallpaperWrapper";
import ComposeContainer from "../components/Journal/Compose/ComposeContainer";
import Footer from "../components/global/Footer";

const Compose = () => {
    useEffect(() => {
        document.title = "Compose | Moah.";
    }, []);

    return (
        <div id="compose" className="page">
            <Header />
            <WallpaperWrapper>
                <ComposeContainer />
            </WallpaperWrapper>
            <Footer />
        </div>
    );
};

export default Compose;
