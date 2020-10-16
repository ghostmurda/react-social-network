import {loginReq} from "../../api/api";
import {GET_ID, GET_NAME, SET_AUTH, TOGGLE_LOADER} from "../reducers/authReducer";

export const onLoginProcessThunk = (userName, userPassword) => (dispatch) => {
    dispatch(toggleLoaderCreator(true));
    loginReq(userName, userPassword)
        .then(res => {
            if (res !== 'failed') {
                dispatch(setAuthCreator());
                dispatch(getUserIdCreator(res.userId));
                dispatch(getUserNameCreator(res.userName));
            }
            dispatch(toggleLoaderCreator(false));
        });
};

export const getUserIdCreator = (userId) => {
    return {
        type: GET_ID,
        userId,
    };
}

export const getUserNameCreator = (userName) => {
    return {
        type: GET_NAME,
        userName,
    };
}

export const setAuthCreator = () => {
    return {
        type: SET_AUTH,
    };
}

export const toggleLoaderCreator = (isFetching) => {
    return {
        type: TOGGLE_LOADER,
        isFetching
    }
}