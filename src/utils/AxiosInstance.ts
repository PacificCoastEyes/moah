import axios from "axios";

const instance = axios.create({
    validateStatus: status => {
        return status < 400;
    },
    baseURL:
        process.env.NODE_ENV === "development"
            ? "http://localhost:5194/api"
            : "http://localhost:5194/api",
});

export default instance;
