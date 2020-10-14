const GET_ID = 'GET_ID';
const SET_AUTH = 'SET_AUTH';
const GET_NAME = 'GET_NAME';

let initialState = {
    userId: null,
    userName: null,
    auth: false,
};

const authReducer = (state = initialState, action) => {
    switch (action.type){
        case GET_ID:{
            let stateCopy = {...state};
            stateCopy.userId = action.userId;
            return stateCopy;
        }
        case SET_AUTH:{
            let stateCopy = {...state};
            stateCopy.auth = true;
            return stateCopy;
        }
        case GET_NAME:{
            let stateCopy = {...state};
            stateCopy.userName = action.userName;
            return stateCopy;
        }
        default:
            return state;
    }
};

export const getUserIdCreator = (userId) => {
    return {
        type: GET_ID,
        userId,
    };
}

export const getUserNameCreator = (userName) => {
    return {
        type: GET_NAME,
        userName,
    };
}

export const setAuthCreator = () => {
    return {
        type: SET_AUTH,
    };
}

export default authReducer;