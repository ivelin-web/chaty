import axios from "axios";

const url = `${process.env.REACT_APP_API_URL}/api`;

const instance = axios.create({
    baseURL: url,
});

export default instance;
