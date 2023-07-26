import axios from "axios";

const instance = axios.create({
    validateStatus: status => {
        return status < 400;
    },
    // withCredentials: true,
});

export default instance;
