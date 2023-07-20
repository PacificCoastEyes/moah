import { PropsWithChildren } from "react";
import "../../styles/components/WallpaperWrapper.css";

const WallpaperWrapper = (props: PropsWithChildren) => {
    return <main id="wallpaper-wrapper">{props.children}</main>;
};

export default WallpaperWrapper;
