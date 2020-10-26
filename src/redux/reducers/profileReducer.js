export const GET_PROFILE = 'GET_PROFILE';
export const TOGGLE_LOADER = 'TOGGLE_LOADER';

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
            stateCopy.profileData.postsData.sort((a, b) => b.id - a.id );
            stateCopy.profileData.posts = stateCopy.profileData.postsData.length;
            return stateCopy;
        }
        case TOGGLE_LOADER:
            return {...state, isFetching: action.isFetching}
        default:
            return state;
    }
}

export default profileReducer;