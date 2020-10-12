const GET_POPULAR_USERS = 'GET_POPULAR_USERS';
const TOGGLE_LOADER = 'TOGGLE_LOADER';

let initialState = {
    popularList: [],
    isFetchingPopularList: false,
};

const popularUsersReducer = (state = initialState, action) => {
    switch (action.type){
        case GET_POPULAR_USERS: {
            let userList = action.userList;
            let stateCopy = {...state};
            stateCopy.popularList = [...state.popularList];
            for (let item of userList) {
                stateCopy.popularList.push(item);
            }
            return stateCopy;
        }
        case TOGGLE_LOADER: {
            let stateCopy = {...state};
            stateCopy.isFetchingPopularList = action.isFetching;
            return stateCopy;
        }
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

export const toggleLoaderPopularList = function(isFetching){
    return {
        type: TOGGLE_LOADER,
        isFetching: isFetching,
    }
}

export default  popularUsersReducer;