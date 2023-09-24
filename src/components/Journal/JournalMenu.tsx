import { useNavigate } from "react-router-dom";
import { Button, Stack } from "@mui/material";
import { Create, Inventory } from "@mui/icons-material";

const JournalMenu = () => {
    const navigate = useNavigate();

    return (
        <Stack direction="row" justifyContent="space-evenly" marginTop={3}>
            <Button
                onClick={() => navigate("/journal/compose")}
                variant="contained"
                sx={{
                    height: "150px",
                    width: "150px",
                    marginRight: 2,
                    padding: 2,
                    borderRadius: "20px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                <Create sx={{ fontSize: "6em" }} />
                Compose
            </Button>
            <Button
                onClick={() => navigate("/journal/archive")}
                variant="contained"
                sx={{
                    height: "150px",
                    width: "150px",
                    marginLeft: 2,
                    padding: 2,
                    borderRadius: "20px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                <Inventory sx={{ fontSize: "6em" }} />
                Archive
            </Button>
        </Stack>
    );
};

export default JournalMenu;
