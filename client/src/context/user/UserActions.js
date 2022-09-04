export const actionTypes = {
    GET_USER: "GET_USER",
    UPDATE_USER: "UPDATE_USER",
    LOGIN: "LOGIN",
    LOGOUT: "LOGOUT",
};

export const GetUser = (user) => ({
    type: actionTypes.GET_USER,
    payload: user,
});

export const UpdateUser = (updatedUser) => ({
    type: actionTypes.UPDATE_USER,
    payload: updatedUser,
});

export const Login = (user) => ({
    type: actionTypes.LOGIN,
    payload: user,
});

export const Logout = () => ({
    type: actionTypes.LOGOUT,
});
