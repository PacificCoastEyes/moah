import { useEffect } from "react";
import Header from "../components/global/Header";
import WallpaperWrapper from "../components/global/WallpaperWrapper";
import ArchiveContainer from "../components/Journal/Archive/ArchiveContainer";
import Footer from "../components/global/Footer";

const Archive = () => {
    useEffect(() => {
        document.title = "Archive | Moah.";
    }, []);

    return (
        <div id="archive" className="page">
            <Header />
            <WallpaperWrapper>
                <ArchiveContainer />
            </WallpaperWrapper>
            <Footer />
        </div>
    );
};

export default Archive;
