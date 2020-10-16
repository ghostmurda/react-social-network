export const GET_ALL_USERS = 'GET_ALL_USERS';
export const GET_FOLLOWING_USERS = 'GET_FOLLOWING_USERS';
export const TOGGLE_ALL_USERS_LOADER = 'TOGGLE_ALL_USERS_LOADER';
export const TOGGLE_FOLLOWING_USERS_LOADER = 'TOGGLE_FOLLOWING_USERS_LOADER';

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
        case TOGGLE_ALL_USERS_LOADER:
            return {...state, isFetchingUsersList: action.isFetching};
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
        case TOGGLE_FOLLOWING_USERS_LOADER:
            return {...state, isFetchingFollowingList: action.isFetching};
        default:
            return {...state};
    }
}

export default usersReducer;