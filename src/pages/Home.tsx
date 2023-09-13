import { useEffect } from "react";
import Hero from "../components/Home/Hero";
import Footer from "../components/global/Footer";
import Header from "../components/global/Header";
import WallpaperWrapper from "../components/global/WallpaperWrapper";
const Home = () => {
    useEffect(() => {
        document.title = "Moah.";
    }, []);

    return (
        <div id="home" className="page">
            <Header />
            <WallpaperWrapper>
                <Hero />
            </WallpaperWrapper>
            <Footer />
        </div>
    );
};

export default Home;
