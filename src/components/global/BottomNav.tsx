import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import {
    CheckBoxOutlineBlank,
    EditNoteOutlined,
    HeadsetOutlined,
    TipsAndUpdatesOutlined,
} from "@mui/icons-material";

const BottomNav = () => {
    const navigate = useNavigate();

    enum pageSlugs {
        "boxbreathing",
        "soundscapes",
        "journal",
        "inspiration",
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
                id="journal"
                label="Journal"
                icon={<EditNoteOutlined />}
            />
            <BottomNavigationAction
                id="inspiration"
                label="Inspiration"
                icon={<TipsAndUpdatesOutlined />}
            />
        </BottomNavigation>
    );
};

export default BottomNav;
