import {addPostReq, profilePageReq} from "../../api/api";
import {GET_PROFILE} from "../reducers/profileReducer";
import {TOGGLE_LOADER} from "../reducers/profileReducer";

export const onGetProfileThunk = (userId) => (dispatch) => {
    dispatch(toggleLoaderProfileCreator(true));
    profilePageReq(userId)
        .then(res => {
            dispatch(toggleLoaderProfileCreator(false));
            dispatch(getProfileActionCreator(res));
        })
}

export const onUpdateProfileThunk = (userId, userName, postText) => (dispatch) => {
    addPostReq(userId, userName, postText)
        .then(res => {
            dispatch(getProfileActionCreator(res));
        });
}

export const getProfileActionCreator = (profileData) => {
    return {
        type: GET_PROFILE,
        profile: profileData,
    };
}

export const toggleLoaderProfileCreator = (isFetching) => {
    return {
        type: TOGGLE_LOADER,
        isFetching,
    }
}