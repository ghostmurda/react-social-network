const GET_ID = 'GET_ID';

let initialState = {
    userId: null,
};

const authReducer = (state = initialState, action) => {
    switch (action.type){
        case GET_ID:{
            let stateCopy = {...state};
            stateCopy.userId = action.userId;
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

export default authReducer;