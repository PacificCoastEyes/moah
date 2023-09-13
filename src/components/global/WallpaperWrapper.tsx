import { PropsWithChildren } from "react";
import { Stack } from "@mui/material";

const WallpaperWrapper = (props: PropsWithChildren) => {
    return (
        <Stack
            marginBottom={{ xs: "56px", sm: 0 }}
            justifyContent="center"
            alignItems="center"
            sx={{
                backgroundImage:
                    "url(https://moahstorage.blob.core.windows.net/assets/images/leaf_motif.svg)",
                backgroundSize: "contain",
            }}
        >
            {props.children}
        </Stack>
    );
};

export default WallpaperWrapper;
