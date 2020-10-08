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
        case 'ADD-MESSAGE':
            let newMessage = {
                id: state[action.profile].length,
                name: 'Daniel Simonov',//currentUser.userInfo.name,
                text: action.text,
            }
            state[action.profile].push(newMessage);
            return state;
        default:
            return state;
    }
}

export const addMessageActionCreator = function (profile, text){
    return {
        type: 'ADD-MESSAGE',
        profile: profile,
        text: text,
    }
}

export default chatReducer;