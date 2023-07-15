import { Link } from "react-router-dom";
import {
    AppBar,
    Box,
    Button,
    Container,
    Stack,
    Toolbar,
    Typography,
} from "@mui/material";
import {
    CheckBoxOutlineBlank,
    EditNoteOutlined,
    HeadsetOutlined,
    LoginOutlined,
    TipsAndUpdatesOutlined,
} from "@mui/icons-material";
import "../../styles/components/Header.css";

const Header = () => {
    return (
        <Container id="header">
            <AppBar color="primary">
                <Toolbar sx={{ justifyContent: "space-between" }}>
                    <Link to="/">
                        <Typography id="logo" variant="h4">
                            Moah.
                        </Typography>
                    </Link>
                    <Stack direction="row">
                        <Box display={{ xs: "none", md: "initial" }}>
                            <Button>
                                <CheckBoxOutlineBlank />
                                Box Breathing
                            </Button>
                            <Button>
                                <HeadsetOutlined />
                                Soundscapes
                            </Button>
                            <Button>
                                <EditNoteOutlined />
                                Journal
                            </Button>
                            <Button>
                                <TipsAndUpdatesOutlined />
                                Inspiration
                            </Button>
                        </Box>
                        <Button>
                            <LoginOutlined />
                            Login
                        </Button>
                    </Stack>
                </Toolbar>
            </AppBar>
        </Container>
    );
};

export default Header;
