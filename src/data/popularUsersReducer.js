const GET_POPULAR_USERS = 'GET_POPULAR_USERS';

let initialState = [];

const popularUsersReducer = (state = initialState, action) => {
    switch (action.type){
        case GET_POPULAR_USERS:
            let userList = action.userList;
            let stateCopy = [...state];
            for (let item of userList){
                stateCopy.push(item);
            }
            return stateCopy;
        default:
            return state;
    }
}

export const getPopularUsersCreator = function(popularList){
    return{
        type: GET_POPULAR_USERS,
        userList: popularList,
    };
};

export default  popularUsersReducer;