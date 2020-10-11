const GET_USERS = 'GET_USERS';

let initialState = {
    followingList: [],
    userInfo: {
        name: 'Daniel Simonov',
        followers: '0',
        following: '0',
        posts: '1',
        info: 'Beginner frontend developer, student',
    },
};

const currentUserReducer = (state = initialState, action) => {
    switch (action.type){
        case GET_USERS:
            let userList = action.userList;
            let stateCopy = {...state};
            stateCopy.followingList = [...state.followingList];
            stateCopy.followingList = userList;
            return stateCopy;
        default:
            return state;
    }
}

export const getUsersCreator = function(followingList){
    return{
        type: GET_USERS,
        userList: followingList,
    };
};

export default currentUserReducer;