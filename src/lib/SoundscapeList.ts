import ocean from "../images/soundscapes/thumbnails/ocean.jpg";
import forest from "../images/soundscapes/thumbnails/forest.jpg";
import rain from "../images/soundscapes/thumbnails/rain.jpg";
import coffeeShop from "../images/soundscapes/thumbnails/coffee-shop.jpg";
import fireplace from "../images/soundscapes/thumbnails/fireplace.jpg";
import whiteNoise from "../images/soundscapes/thumbnails/white-noise.jpg";

interface Soundscape {
    id: string;
    label: string;
    thumbnail?: string;
    image?: string;
    audio?: string;
}

const SoundscapeList: Soundscape[] = [
    {
        id: "ocean",
        label: "Ocean",
        thumbnail: ocean,
    },
    {
        id: "forest",
        label: "forest",
        thumbnail: forest,
    },
    {
        id: "rain",
        label: "Rain",
        thumbnail: rain,
    },
    {
        id: "coffeeShop",
        label: "Coffee Shop",
        thumbnail: coffeeShop,
    },
    {
        id: "fireplace",
        label: "Fireplace",
        thumbnail: fireplace,
    },
    {
        id: "whiteNoise",
        label: "White Noise",
        thumbnail: whiteNoise,
    },
];

export default SoundscapeList;
