import axios from "@Axios";

// Set avatar
export const setAvatar = async (avatarImage) => {
    const res = await axios.put("users/setAvatar", avatarImage, {
        withCredentials: true,
    });

    return res;
};

// Get all users except logged in
export const getUsers = async () => {
    const res = await axios.get("users", {
        withCredentials: true,
    });

    return res;
};
