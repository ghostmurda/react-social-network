import {getAllUsersListReq, getFollowingListReq} from "../../api/api";

const GET_ALL_USERS = 'GET_ALL_USERS';
const GET_FOLLOWING_USERS = 'GET_FOLLOWING_USERS';
const TOGGLE_ALL_USERS_LOADER = 'TOGGLE_ALL_USERS_LOADER';
const TOGGLE_FOLLOWING_USERS_LOADER = 'TOGGLE_FOLLOWING_USERS_LOADER';

let initialState = {
    usersList: [],
    followingList: [],
    isFetchingUsersList: false,
    isFetchingFollowingList: false,
};

const usersReducer = (state = initialState, action) => {
    switch (action.type){
        case GET_ALL_USERS: {
            let newUsersList = action.newUsersList;
            let stateCopy = {...state};
            stateCopy.usersList = [...state.usersList];
            let newUsersListCopy = [];
            for (let item of newUsersList) {
                newUsersListCopy.push(item);
            }
            stateCopy.usersList = newUsersListCopy;
            return stateCopy;
        }
        case TOGGLE_ALL_USERS_LOADER: {
            let stateCopy = {...state};
            stateCopy.isFetchingUsersList = action.isFetching;
            return stateCopy;
        }
        case GET_FOLLOWING_USERS:{
            let newFollowingList = action.newFollowingList;
            let stateCopy = {...state};
            stateCopy.followingList = [...state.followingList];
            let newFollowingListCopy = [];
            for (let item of newFollowingList) {
                newFollowingListCopy.push(item);
            }
            stateCopy.followingList = newFollowingListCopy;
            return stateCopy;
        }
        case TOGGLE_FOLLOWING_USERS_LOADER:{
            let stateCopy = {...state};
            stateCopy.isFetchingFollowingList = action.isFetching;
            return stateCopy;
        }
        default:
            return state;
    }
}

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
    };
};

export const getFollowingUsersCreator = (newFollowingList) => {
    return{
        type: GET_FOLLOWING_USERS,
        newFollowingList
    }
};

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

export default usersReducer;