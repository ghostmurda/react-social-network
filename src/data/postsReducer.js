const postsReducer = (state, currentUser, action) => {
    if (action.type === 'SORT-POSTS'){
        state[action.profile].sort((a, b) => b.id - a.id );
    } else if (action.type === 'ADD-POST'){
        let newPost = {
            id: state[action.profile].length,
            name: currentUser.userInfo.name,
            text: action.postText,
        };
        state[action.profile].push(newPost);
        state[action.profile].sort((a, b) => b.id - a.id );
    }
    return state;
}

export default postsReducer;