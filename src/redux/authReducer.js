const GET_ID = 'GET_ID';
const SET_AUTH = 'SET_AUTH';

let initialState = {
    userId: null,
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
        default:
            return state;
    }
};

export const getUserId = (userId) => {
    return {
        type: GET_ID,
        userId,
    };
}

export const setAuth = () => {
    return {
        type: SET_AUTH,
    };
}

export default authReducer;