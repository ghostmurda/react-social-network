export const GET_ID = 'GET_ID';
export const SET_AUTH = 'SET_AUTH';
export const GET_NAME = 'GET_NAME';
export const TOGGLE_LOADER = 'TOGGLE_LOADER';

let initialState = {
    userId: null,
    userName: null,
    auth: false,
    isFetching: false,
};

const authReducer = (state = initialState, action) => {
    switch (action.type){
        case GET_ID:
            return {...state, userId: action.userId}
        case SET_AUTH:
            return {...state, auth: true}
        case GET_NAME:
            return {...state, userName: action.userName};
        case TOGGLE_LOADER:
            return {...state, isFetching: action.isFetching}
        default:
            return {...state};
    }
};

export default authReducer;