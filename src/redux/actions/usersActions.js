import {getAllUsersListReq, getFollowingListReq} from "../../api/api";
import {
    GET_ALL_USERS,
    GET_FOLLOWING_USERS,
    TOGGLE_ALL_USERS_LOADER,
    TOGGLE_FOLLOWING_USERS_LOADER
} from "../reducers/usersReducer";

export const onGetFollowingListThunk = (userId) => (dispatch) => {
    dispatch(toggleLoaderFollowingListCreator(true));
    getFollowingListReq(userId)
        .then(res => {
            dispatch(toggleLoaderFollowingListCreator(false));
            dispatch(getFollowingUsersCreator(res));
        });
}

export const onGetAllUsersThunk = () => (dispatch) => {
    dispatch(toggleLoaderAllUsersCreator(true));
    getAllUsersListReq()
        .then(res => {
            dispatch(toggleLoaderAllUsersCreator(false));
            dispatch(getAllUsersCreator(res));
        });
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