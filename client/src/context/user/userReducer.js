import { actionTypes } from "./userActions";

const UserReducer = (state, action) => {
    switch (action.type) {
        case actionTypes.GET_USER:
            return {
                ...state,
                user: action.payload,
            };

        case actionTypes.UPDATE_USER:
            return {
                ...state,
                user: action.payload,
            };

        case actionTypes.LOGIN:
            return {
                ...state,
                user: action.payload,
            };

        case actionTypes.LOGOUT:
            return {
                ...state,
                user: null,
            };
    }
};

export default UserReducer;
