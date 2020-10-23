import {addPostReq, profilePageReq, putUserInfoReq} from "../../api/api";
import {GET_PROFILE} from "../reducers/profileReducer";
import {TOGGLE_LOADER} from "../reducers/profileReducer";

export const onGetProfileThunk = (userId) => async (dispatch) => {
    dispatch(toggleLoaderProfileCreator(true));
    try{
        let res = await profilePageReq(userId);
        dispatch(toggleLoaderProfileCreator(false));
        dispatch(getProfileCreator(res));
    }catch (err){
        dispatch(toggleLoaderProfileCreator(false));
        console.log(err);
    }
}

export const onProfileAddPostThunk = (userId, userName, postText) => async (dispatch) => {
    try{
        let res = await addPostReq(userId, userName, postText);
        dispatch(getProfileCreator(res));
    }catch (err){
        console.log(err);
    }
}

export const onChangeProfileInfoThunk = (id, info) => async (dispatch) => {
    try{
        let res = await putUserInfoReq(id, info);
        dispatch(getProfileCreator(res));
    }catch (err){
        console.log(err);
    }
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