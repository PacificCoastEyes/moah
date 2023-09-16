import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import {
    CheckBoxOutlineBlank,
    EditNoteOutlined,
    HeadsetOutlined,
    TipsAndUpdatesOutlined,
} from "@mui/icons-material";

import { AuthContext } from "../../contexts/AuthContext";
import { IAuthContext } from "../../models/IAuthContext";

const BottomNav = () => {
    const authContext = useContext(AuthContext);
    const { isLoggedIn } = authContext as IAuthContext;

    const navigate = useNavigate();

    enum pageSlugs {
        "boxbreathing",
        "soundscapes",
        "inspiration",
        "journal",
    }

    // eslint-disable-next-line
    const [selectedIndex, setSelectedIndex] = useState<number>(
        pageSlugs[
            window.location.pathname.replace("/", "") as keyof typeof pageSlugs
        ]
    );

    return (
        <BottomNavigation
            id="bottom-nav"
            value={selectedIndex}
            showLabels={!isLoggedIn}
            onChange={(e, newIndex) => {
                navigate(`/${pageSlugs[newIndex]}`);
            }}
            sx={{
                display: { xs: "flex", md: "none" },
                justifyContent: "center",
                alignItems: "center",
                width: "100vw",
            }}
        >
            <BottomNavigationAction
                id="boxbreathing"
                label="Breathing"
                icon={<CheckBoxOutlineBlank />}
            />
            <BottomNavigationAction
                id="soundscapes"
                label="Soundscapes"
                icon={<HeadsetOutlined />}
            />
            <BottomNavigationAction
                id="inspiration"
                label="Inspiration"
                icon={<TipsAndUpdatesOutlined />}
            />
            {isLoggedIn && (
                <BottomNavigationAction
                    id="journal"
                    label="Journal"
                    icon={<EditNoteOutlined />}
                />
            )}
        </BottomNavigation>
    );
};

export default BottomNav;
