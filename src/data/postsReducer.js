let initialState = {
    "Daniel Simonov": [
        {id: 0, name: "Daniel Simonov", text: "Test post"},
        {id: 1, name: "Daniel Simonov", text: "Unt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
        {id: 2, name: "Daniel Simonov", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt "},
    ],
    "Pavel Durov": [
        {id: 0, name: "ServiceWorker", text: "Hello! This is your first post. " +
                "You can post anything here. Also you can post messages on another people profiles. " +
                "But remember one thing: be polite!"
        },
    ],
    "Jon Snow": [
        {id: 0, name: "ServiceWorker", text: "Hello! This is your first post. " +
                "You can post anything here. Also you can post messages on another people profiles. " +
                "But remember one thing: be polite!"
        },
    ],
    "Test User": [
        {id: 0, name: "ServiceWorker", text: "Hello! This is your first post. " +
                "You can post anything here. Also you can post messages on another people profiles. " +
                "But remember one thing: be polite!"
        },
    ],
    "Dana West": [
        {id: 0, name: "ServiceWorker", text: "Hello! This is your first post. " +
                "You can post anything here. Also you can post messages on another people profiles. " +
                "But remember one thing: be polite!"
        },
    ],
    "Roland Worthington": [
        {id: 0, name: "ServiceWorker", text: "Hello! This is your first post. " +
                "You can post anything here. Also you can post messages on another people profiles. " +
                "But remember one thing: be polite!"
        },
    ],
    "Kelsi Clarkson": [
        {id: 0, name: "ServiceWorker", text: "Hello! This is your first post. " +
                "You can post anything here. Also you can post messages on another people profiles. " +
                "But remember one thing: be polite!"
        },
    ],
    "Taiba Moran": [
        {id: 0, name: "ServiceWorker", text: "Hello! This is your first post. " +
                "You can post anything here. Also you can post messages on another people profiles. " +
                "But remember one thing: be polite!"
        },
    ],
    "Kason Parry": [
        {id: 0, name: "ServiceWorker", text: "Hello! This is your first post. " +
                "You can post anything here. Also you can post messages on another people profiles. " +
                "But remember one thing: be polite!"
        },
    ],
    "Manha Hayden": [
        {id: 0, name: "ServiceWorker", text: "Hello! This is your first post. " +
                "You can post anything here. Also you can post messages on another people profiles. " +
                "But remember one thing: be polite!"
        },
    ],
    "Cydney Power": [
        {id: 0, name: "ServiceWorker", text: "Hello! This is your first post. " +
                "You can post anything here. Also you can post messages on another people profiles. " +
                "But remember one thing: be polite!"
        },
    ],
};

const postsReducer = (state = initialState, action ) => {
    switch (action.type){
        case 'SORT-POSTS':
            state[action.profile].sort((a, b) => b.id - a.id );
            return state;
        case 'ADD-POST':
            let newPost = {
                id: state[action.profile].length,
                name: "Daniel Simonov",//currentUser.userInfo.name,
                text: action.postText,
            };
            state[action.profile].push(newPost);
            state[action.profile].sort((a, b) => b.id - a.id );
            return state;
        default:
            return state;
    }
}

export const sortPostsActionCreator = function (profileOwner){
    return {
        type: 'SORT-POSTS',
        profile: profileOwner,
    };
};

export const addPostActionCreator = function (profile, text){
    return {
        type: 'ADD-POST',
        profile: profile,
        postText: text,
    };
};

export default postsReducer;