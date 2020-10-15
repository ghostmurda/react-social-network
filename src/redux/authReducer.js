import {loginReq} from "../api/api";

const GET_ID = 'GET_ID';
const SET_AUTH = 'SET_AUTH';
const GET_NAME = 'GET_NAME';
const TOGGLE_LOADER = 'TOGGLE_LOADER';

let initialState = {
    userId: null,
    userName: null,
    auth: false,
    isFetching: false,
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
        case TOGGLE_LOADER:{
            return {...state, isFetching: action.isFetching}
        }
        default:
            return state;
    }
};

export const onLoginProcessThunk = (userName, userPassword) => (dispatch) => {
    dispatch(toggleLoaderCreator(true));
    loginReq(userName, userPassword)
        .then(res => {
            if (res !== 'failed') {
                dispatch(setAuthCreator());
                dispatch(getUserIdCreator(res.userId));
                dispatch(getUserNameCreator(res.userName));
            }
            dispatch(toggleLoaderCreator(false));
        });
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

export const toggleLoaderCreator = (isFetching) => {
    return {
        type: TOGGLE_LOADER,
        isFetching
    }
}

export default authReducer;