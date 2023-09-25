import axios from "axios";

const instance = axios.create({
    validateStatus: status => {
        return status < 400;
    },
    baseURL:
        process.env.NODE_ENV === "development"
            ? "http://localhost:5194/api"
            : "https://moah-api.azurewebsites.net/api",
});

export default instance;
