import TopNav from "./TopNav";
import BottomNav from "./BottomNav";
import { Container } from "@mui/material";
import "../../styles/components/Header.css";

const Header = () => {
    return (
        <Container id="header">
            <TopNav />
            <BottomNav />
        </Container>
    );
};

export default Header;
