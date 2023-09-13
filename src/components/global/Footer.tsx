import { Stack, Typography } from "@mui/material";
const Footer = () => {
    return (
        <Stack
            id="footer"
            display={{ xs: "none", md: "flex" }}
            justifyContent="center"
            paddingX={3}
            borderTop="1px solid #ccc"
        >
            <Typography variant="body2">
                <a
                    href="https://flyingcolors.tech"
                    rel="noreferrer"
                    target="_blank"
                >
                    Flying Colors Web Studio
                </a>{" "}
                &copy; {new Date().getFullYear()} Amitai Zand
            </Typography>
        </Stack>
    );
};

export default Footer;
