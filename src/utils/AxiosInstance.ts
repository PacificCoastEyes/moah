import axios from "axios";

const instance = axios.create({
    validateStatus: status => {
        return status < 400;
    },
    baseURL:
        // Switch backend URL depending on environment
        process.env.NODE_ENV === "development"
            ? "http://localhost:5194/api"
            : "https://moah-api.azurewebsites.net/api",
    withCredentials: process.env.NODE_ENV === "development" ? false : true,
});

export default instance;
