import oceanThumbnail from "../images/soundscapes/thumbnails/ocean.jpg";
import forestThumbnail from "../images/soundscapes/thumbnails/forest.jpg";
import rainThumbnail from "../images/soundscapes/thumbnails/rain.jpg";
import coffeeShopThumbnail from "../images/soundscapes/thumbnails/coffee-shop.jpg";
import fireplaceThumbnail from "../images/soundscapes/thumbnails/fireplace.jpg";
import whiteNoiseThumbnail from "../images/soundscapes/thumbnails/white-noise.jpg";

import oceanFull from "../images/soundscapes/full/ocean.jpg";
import forestFull from "../images/soundscapes/full/forest.jpg";
import rainFull from "../images/soundscapes/full/rain.jpg";
import coffeeShopFull from "../images/soundscapes/full/coffee-shop.jpg";
import fireplaceFull from "../images/soundscapes/full/fireplace.jpg";
import whiteNoiseFull from "../images/soundscapes/full/white-noise.jpg";

import oceanAudio from "../audio/ocean.mp3";
import forestAudio from "../audio/forest.mp3";
import rainAudio from "../audio/rain.mp3";
import coffeeShopAudio from "../audio/coffee-shop.mp3";
import fireplaceAudio from "../audio/fireplace.mp3";
import whiteNoiseAudio from "../audio/white-noise.mp3";

interface Soundscape {
    id: string;
    label: string;
    thumbnail: string;
    image: string;
    audio: string;
}

interface SoundscapeDict {
    [soundscapeId: string]: Soundscape;
}

const SoundscapeList: SoundscapeDict = {
    ocean: {
        id: "ocean",
        label: "Ocean",
        thumbnail: oceanThumbnail,
        image: oceanFull,
        audio: oceanAudio,
    },
    forest: {
        id: "forest",
        label: "forest",
        thumbnail: forestThumbnail,
        image: forestFull,
        audio: forestAudio,
    },
    rain: {
        id: "rain",
        label: "Rain",
        thumbnail: rainThumbnail,
        image: rainFull,
        audio: rainAudio,
    },
    coffeeShop: {
        id: "coffeeShop",
        label: "Coffee Shop",
        thumbnail: coffeeShopThumbnail,
        image: coffeeShopFull,
        audio: coffeeShopAudio,
    },
    fireplace: {
        id: "fireplace",
        label: "Fireplace",
        thumbnail: fireplaceThumbnail,
        image: fireplaceFull,
        audio: fireplaceAudio,
    },
    whiteNoise: {
        id: "whiteNoise",
        label: "White Noise",
        thumbnail: whiteNoiseThumbnail,
        image: whiteNoiseFull,
        audio: whiteNoiseAudio,
    },
};

export default SoundscapeList;
