const postsReducer = (state, currentUser, action) => {
    switch (action.type){
        case 'SORT-POSTS':
            state[action.profile].sort((a, b) => b.id - a.id );
            return state;
        case 'ADD-POST':
            let newPost = {
                id: state[action.profile].length,
                name: currentUser.userInfo.name,
                text: action.postText,
            };
            state[action.profile].push(newPost);
            state[action.profile].sort((a, b) => b.id - a.id );
            return state;
        default:
            return state;
    }
}

export default postsReducer;