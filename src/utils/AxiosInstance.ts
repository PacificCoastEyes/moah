import axios from "axios";

const instance = axios.create({
    validateStatus: status => {
        return status < 400;
    },
    baseURL: "https://moah-api.azurewebsites.net/api",
    withCredentials: true,
});

export default instance;
