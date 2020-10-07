const chatReducer = (state, currentUser, action) => {
    if (action.type === 'ADD-MESSAGE'){
        let newMessage = {
            id: state[action.profile].length,
            name: currentUser.userInfo.name,
            text: action.text,
        }
        state[action.profile].push(newMessage);
    }
    return state;
}

export const addMessageActionCreator = function (profile, text){
    return {
        type: 'ADD-MESSAGE',
        profile: profile,
        text: text,
    }
}

export default chatReducer;