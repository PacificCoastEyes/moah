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
                        <NavLink to="/soundscapes">
                            <Button>
                                <HeadsetOutlined />
                                Soundscapes
                            </Button>
                        </NavLink>
                        <NavLink to="/inspiration">
                            <Button>
                                <TipsAndUpdatesOutlined />
                                Inspiration
                            </Button>
                        </NavLink>
                        <NavLink to="/journal">
                            <Button>
                                <EditNoteOutlined />
                                Journal
                            </Button>
                        </NavLink>
                    </Box>
                    <NavLink to="/login">
                        <Button>
                            <LoginOutlined />
                            Login
                        </Button>
                    </NavLink>
                </Stack>
            </Toolbar>
        </AppBar>
    );
};

export default TopNav;
