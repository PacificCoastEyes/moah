import { Container, Typography } from "@mui/material";
import "../../styles/components/Footer.css";

const Footer = () => {
    return (
        <Container
            id="footer"
            maxWidth={false}
            sx={{
                display: "flex",
                justifyContent: { xs: "center", md: "initial" },
                alignItems: "center",
            }}
        >
            <Typography variant="body2">
                <a
                    href="https://flyingcolors.tech"
                    rel="noreferrer"
                    target="_blank"
                >
                    Flying Colors Web Studio
                </a>{" "}
                &copy; {new Date().getFullYear()} Amitai Zand. All rights
                reserved.
            </Typography>
        </Container>
    );
};

export default Footer;
