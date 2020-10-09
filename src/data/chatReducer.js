const ADD_MESSAGE = 'ADD_MESSAGE';

let initialState = {
    "Pavel Durov": [
        {id: 0, name: "ServiceWorker", text: "This chat is empty, be first!"},
    ],
    "Jon Snow": [
        {id: 0, name: "ServiceWorker", text: "This chat is empty, be first!"},
    ],
    "Test User": [
        {id: 0, name: "ServiceWorker", text: "This chat is empty, be first!"},
    ],
    "Dana West": [
        {id: 0, name: "ServiceWorker", text: "This chat is empty, be first!"},
    ],
    "Roland Worthington": [
        {id: 0, name: "ServiceWorker", text: "This chat is empty, be first!"},
    ],
    "Kelsi Clarkson": [
        {id: 0, name: "ServiceWorker", text: "This chat is empty, be first!"},
    ],
    "Taiba Moran": [
        {id: 0, name: "ServiceWorker", text: "This chat is empty, be first!"},
    ],
    "Kason Parry": [
        {id: 0, name: "ServiceWorker", text: "This chat is empty, be first!"},
    ],
    "Manha Hayden": [
        {id: 0, name: "ServiceWorker", text: "This chat is empty, be first!"},
    ],
    "Cydney Power": [
        {id: 0, name: "ServiceWorker", text: "This chat is empty, be first!"},
    ],
};

const chatReducer = (state = initialState, action) => {
    switch (action.type){
        case ADD_MESSAGE:
            let newMessage = {
                id: state[action.profile].length,
                name: action.messageCreator,
                text: action.text,
            }
            let stateCopy = {...state};
            stateCopy[action.profile] = [...state[action.profile]];
            stateCopy[action.profile].push(newMessage);
            return stateCopy;
        default:
            return state;
    }
}

export const addMessageActionCreator = function (profile, text, messageCreator){
    return {
        type: ADD_MESSAGE,
        profile: profile,
        text: text,
        messageCreator: messageCreator,
    }
}

export default chatReducer;