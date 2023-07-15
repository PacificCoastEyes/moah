import Hero from "../components/Home/Hero";
import Footer from "../components/global/Footer";
import Header from "../components/global/Header";
import "../styles/pages/Home.css";

const Home = () => {
    return (
        <div id="home" className="page">
            <Header />
            <Hero />
            <Footer />
        </div>
    );
};

export default Home;
