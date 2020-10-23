import {loginReq} from "../../api/api";
import {GET_ID, GET_NAME, SET_AUTH, TOGGLE_LOADER} from "../reducers/authReducer";

export const onLoginProcessThunk = (userName, userPassword) => async (dispatch) => {
    dispatch(toggleLoaderCreator(true));
    try{
        let res = await loginReq(userName, userPassword);
        if (res !== 'failed') {
            dispatch(setAuthCreator());
            dispatch(getUserIdCreator(res.userId));
            dispatch(getUserNameCreator(res.userName));
        }
    }catch (err){
        console.log(err);
    }
    dispatch(toggleLoaderCreator(false));
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