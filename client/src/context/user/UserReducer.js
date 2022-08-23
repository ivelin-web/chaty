import { actionTypes } from "./UserActions";

const UserReducer = (state, action) => {
    switch (action.type) {
        case actionTypes.GET_USER:
            return {
                ...state,
                user: action.payload,
            };

        case actionTypes.LOGIN:
            return {
                user: action.payload,
            };

        case actionTypes.LOGOUT:
            return {
                ...state,
                user: null,
            };
    }
};
