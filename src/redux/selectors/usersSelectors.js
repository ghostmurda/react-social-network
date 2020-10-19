export const getFollowingList = (state) => {
    return state.usersData.followingList;
}

export const getUsersList = (state) => {
    return state.usersData.usersList;
}

export const getFetchingFollowingList = (state) => {
    return state.usersData.isFetchingFollowingList;
}

export const getFetchingUsersList = (state) => {
    return state.usersData.isFetchingUsersList;
}