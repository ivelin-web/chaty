import axios from "../../axios";

// Login user
export const login = async (credentials) => {
    const res = await axios.post("auth/login", credentials, {
        withCredentials: true,
    });

    return res;
};

// Register user
export const register = async (payload) => {
    const res = await axios.post("auth/register", payload);

    return res;
};

// Logout user
export const logout = async () => {
    const res = await axios.post("auth/logout", null, {
        withCredentials: true,
    });

    return res;
};

// Get auth user
export const getAuthUser = async () => {
    const res = await axios.get("auth/user", {
        withCredentials: true,
    });

    return res;
};
