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
            for (let item of newUsersList) {
                stateCopy.usersList.push(item);
            }
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
            for (let item of newFollowingList) {
                stateCopy.followingList.push(item);
            }
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