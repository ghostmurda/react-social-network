const GET_PROFILE = 'GET_PROFILE';
const TOGGLE_LOADER = 'TOGGLE_LOADER';

let initialState = {
    profileData: {},
    isFetching: false,
};

const profileReducer = (state = initialState, action) => {
    switch (action.type){
        case GET_PROFILE:{
            let stateCopy = {...state};
            stateCopy.profileData = {...state.profileData};
            stateCopy.profileData = action.profile;
            return stateCopy;
        }
        case TOGGLE_LOADER:{
            let stateCopy = {...state};
            stateCopy.isFetching = action.isFetching;
            return stateCopy;
        }
        default:
            return state;
    }
}

export const getProfileActionCreator = (profileData) => {
    return {
        type: GET_PROFILE,
        profile: profileData,
    };
}

export const toggleLoaderProfileCreator = (isFetching) => {
    return {
        type: TOGGLE_LOADER,
        isFetching,
    }
}

export default profileReducer;