import { Link, NavLink } from "react-router-dom";
import { AppBar, Box, Button, Stack, Toolbar, Typography } from "@mui/material";
import {
    CheckBoxOutlineBlank,
    EditNoteOutlined,
    HeadsetOutlined,
    LoginOutlined,
    TipsAndUpdatesOutlined,
} from "@mui/icons-material";

const TopNav = () => {
    return (
        <AppBar color="primary">
            <Toolbar sx={{ justifyContent: "space-between" }}>
                <Link to="/">
                    <Typography id="logo" variant="h4">
                        Moah.
                    </Typography>
                </Link>
                <Stack direction="row">
                    <Box display={{ xs: "none", md: "initial" }}>
                        <NavLink to="/boxbreathing">
                            <Button>
                                <CheckBoxOutlineBlank />
                                Box Breathing
                            </Button>
                        </NavLink>
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
    );
};

export default TopNav;
