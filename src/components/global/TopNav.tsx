import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AppBar, Box, Button, Stack, Toolbar, Typography } from "@mui/material";
import {
    CheckBoxOutlineBlank,
    EditNoteOutlined,
    HeadsetOutlined,
    LoginOutlined,
    LogoutOutlined,
    TipsAndUpdatesOutlined,
} from "@mui/icons-material";

import { AuthContext } from "../../contexts/AuthContext";
import { IAuthContext } from "../../models/IAuthContext";

const TopNav = () => {
    const authContext = useContext(AuthContext);
    const { isLoggedIn } = authContext as IAuthContext;

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
                        {isLoggedIn && (
                            <NavLink to="/journal">
                                <Button>
                                    <EditNoteOutlined />
                                    Journal
                                </Button>
                            </NavLink>
                        )}
                    </Box>
                    {/* {isLoggedIn ? (
                        <NavLink to="/logout">
                            <Button>
                                <LogoutOutlined />
                                Logout
                            </Button>
                        </NavLink>
                    ) : (
                        <NavLink to="/login">
                            <Button>
                                <LoginOutlined />
                                Login
                            </Button>
                        </NavLink>
                    )} */}
                </Stack>
            </Toolbar>
        </AppBar>
    );
};

export default TopNav;
