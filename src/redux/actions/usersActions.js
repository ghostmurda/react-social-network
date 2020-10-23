import {getAllUsersListReq, getFollowingListReq} from "../../api/api";
import {
    GET_ALL_USERS,
    GET_FOLLOWING_USERS,
    TOGGLE_ALL_USERS_LOADER,
    TOGGLE_FOLLOWING_USERS_LOADER
} from "../reducers/usersReducer";

export const onGetFollowingListThunk = (userId) => async (dispatch) => {
    dispatch(toggleLoaderFollowingListCreator(true));
    try{
        let res = await getFollowingListReq(userId);
        dispatch(getFollowingUsersCreator(res));
    }catch (err){
        console.log(err);
    }
    dispatch(toggleLoaderFollowingListCreator(false));
}

export const onGetAllUsersThunk = () => async (dispatch) => {
    dispatch(toggleLoaderAllUsersCreator(true));
    try{
        let res = await getAllUsersListReq();
        dispatch(getAllUsersCreator(res));
    }catch (err){
        console.log(err);
    }
    dispatch(toggleLoaderAllUsersCreator(false));
}

export const getAllUsersCreator = function(newUsersList){
    return{
        type: GET_ALL_USERS,
        newUsersList
    }
}

export const getFollowingUsersCreator = (newFollowingList) => {
    return{
        type: GET_FOLLOWING_USERS,
        newFollowingList
    }
}

export const toggleLoaderAllUsersCreator = function(isFetching){
    return {
        type: TOGGLE_ALL_USERS_LOADER,
        isFetching
    }
}

export const toggleLoaderFollowingListCreator = function(isFetching){
    return {
        type: TOGGLE_FOLLOWING_USERS_LOADER,
        isFetching
    }
}