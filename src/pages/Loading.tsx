import { CircularProgress } from "@mui/material";

import Header from "../components/global/Header";
import WallpaperWrapper from "../components/global/WallpaperWrapper";
import Footer from "../components/global/Footer";

const Loading = () => {
    return (
        <div id="dashboard" className="page">
            <Header />
            <WallpaperWrapper>
                <CircularProgress color="primary" size={100} />
            </WallpaperWrapper>
            <Footer />
        </div>
    );
};

export default Loading;
