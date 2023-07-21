import { Container, Typography } from "@mui/material";
import "../../styles/components/Footer.css";

const Footer = () => {
    return (
        <Container
            id="footer"
            maxWidth={false}
            sx={{
                height: { xs: "100px", md: "initial" },
                display: "flex",
                justifyContent: { xs: "center", md: "initial" },
                alignItems: { xs: "flex-start", md: "center" },
            }}
        >
            <Typography variant="body2" marginTop={{ xs: "12px", md: "0" }}>
                <a
                    href="https://flyingcolors.tech"
                    rel="noreferrer"
                    target="_blank"
                >
                    Flying Colors Web Studio
                </a>{" "}
                &copy; {new Date().getFullYear()} Amitai Zand
            </Typography>
        </Container>
    );
};

export default Footer;
