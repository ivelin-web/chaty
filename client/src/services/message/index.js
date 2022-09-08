import axios from "@Axios";

// Get all messages
export const getMessages = async (otherUser) => {
    const res = await axios.get(`messages?otherUser=${otherUser}`, {
        withCredentials: true,
    });

    return res;
};

// Send message
export const sendMessage = async (payload) => {
    const res = await axios.post("messages", payload, {
        withCredentials: true,
    });

    return res;
};
