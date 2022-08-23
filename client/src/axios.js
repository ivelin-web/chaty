import axios from "axios";

const url = "http://localhost:5000/api";

const instance = axios.create({
    baseURL: url,
});

export default instance;
