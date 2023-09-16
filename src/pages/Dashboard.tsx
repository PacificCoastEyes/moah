import Header from "../components/global/Header";
import WallpaperWrapper from "../components/global/WallpaperWrapper";
import Footer from "../components/global/Footer";

type Props = {};

const Dashboard = (props: Props) => {
    return (
        <div id="dashboard" className="page">
            <Header />
            <WallpaperWrapper>Hi from the dashboard!</WallpaperWrapper>
            <Footer />
        </div>
    );
};

export default Dashboard;
