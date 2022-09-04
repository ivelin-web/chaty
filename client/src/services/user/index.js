import axios from "../../axios";

// Set avatar
export const setAvatar = async (avatarImage) => {
    const res = await axios.put("users/setAvatar", avatarImage, {
        withCredentials: true,
    });

    return res;
};
