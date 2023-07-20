import Hero from "../components/Home/Hero";
import Footer from "../components/global/Footer";
import Header from "../components/global/Header";
import WallpaperWrapper from "../components/global/WallpaperWrapper";
import "../styles/pages/Home.css";

const Home = () => {
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
