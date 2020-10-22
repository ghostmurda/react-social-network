import {addPostReq, profilePageReq, putUserInfoReq} from "../../api/api";
import {GET_PROFILE} from "../reducers/profileReducer";
import {TOGGLE_LOADER} from "../reducers/profileReducer";

export const onGetProfileThunk = (userId) => (dispatch) => {
    dispatch(toggleLoaderProfileCreator(true));
    profilePageReq(userId)
        .then(res => {
            dispatch(toggleLoaderProfileCreator(false));
            dispatch(getProfileCreator(res));
        })
}

export const onProfileAddPostThunk = (userId, userName, postText) => (dispatch) => {
    addPostReq(userId, userName, postText)
        .then(res => {
            dispatch(getProfileCreator(res));
        });
}

export const onChangeProfileInfoThunk = (id, info) => (dispatch) => {
    putUserInfoReq(id, info)
        .then(res => {
            dispatch(getProfileCreator(res));
        });
}

export const getProfileCreator = (profileData) => {
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