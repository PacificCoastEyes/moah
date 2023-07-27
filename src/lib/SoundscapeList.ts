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
        thumbnail:
            "https://moahstorage.blob.core.windows.net/assets/images/soundscapes/thumbnails/ocean.jpg",
        image: "https://moahstorage.blob.core.windows.net/assets/images/soundscapes/full/ocean.jpg",
        audio: "https://moahstorage.blob.core.windows.net/assets/audio/ocean.mp3",
    },
    forest: {
        id: "forest",
        label: "forest",
        thumbnail:
            "https://moahstorage.blob.core.windows.net/assets/images/soundscapes/thumbnails/forest.jpg",
        image: "https://moahstorage.blob.core.windows.net/assets/images/soundscapes/full/forest.jpg",
        audio: "https://moahstorage.blob.core.windows.net/assets/audio/forest.mp3",
    },
    rain: {
        id: "rain",
        label: "Rain",
        thumbnail:
            "https://moahstorage.blob.core.windows.net/assets/images/soundscapes/thumbnails/rain.jpg",
        image: "https://moahstorage.blob.core.windows.net/assets/images/soundscapes/full/rain.jpg",
        audio: "https://moahstorage.blob.core.windows.net/assets/audio/rain.mp3",
    },
    coffeeShop: {
        id: "coffeeShop",
        label: "Coffee Shop",
        thumbnail:
            "https://moahstorage.blob.core.windows.net/assets/images/soundscapes/thumbnails/coffee-shop.jpg",
        image: "https://moahstorage.blob.core.windows.net/assets/images/soundscapes/full/coffee-shop.jpg",
        audio: "https://moahstorage.blob.core.windows.net/assets/audio/coffee-shop.mp3",
    },
    fireplace: {
        id: "fireplace",
        label: "Fireplace",
        thumbnail:
            "https://moahstorage.blob.core.windows.net/assets/images/soundscapes/thumbnails/fireplace.jpg",
        image: "https://moahstorage.blob.core.windows.net/assets/images/soundscapes/full/fireplace.jpg",
        audio: "https://moahstorage.blob.core.windows.net/assets/audio/fireplace.mp3",
    },
    whiteNoise: {
        id: "whiteNoise",
        label: "White Noise",
        thumbnail:
            "https://moahstorage.blob.core.windows.net/assets/images/soundscapes/thumbnails/white-noise.jpg",
        image: "https://moahstorage.blob.core.windows.net/assets/images/soundscapes/full/white-noise.jpg",
        audio: "https://moahstorage.blob.core.windows.net/assets/audio/white-noise.mp3",
    },
};

export default SoundscapeList;
