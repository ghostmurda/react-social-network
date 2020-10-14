import {connect} from "react-redux";
import UserListApi from "./UserListApi";
import {
    getAllUsersCreator,
    getFollowingUsersCreator,
    toggleLoaderAllUsersCreator,
    toggleLoaderFollowingListCreator,
} from "../../redux/usersReducer";

let mapStateToProps = (state) => {
    return {
        followingListData: state.usersData.followingList,
        usersListData: state.usersData.usersList,
        isFetchingFollowingList: state.usersData.isFetchingFollowingList,
        isFetchingUsersList: state.usersData.isFetchingUsersList,
    };
};

let mapDispatchToProps = (dispatch) => {
    return {
        getFollowingList: (followingList) => {
            dispatch(getFollowingUsersCreator(followingList));
        },
        getAllUsers: (usersList) => {
            dispatch(getAllUsersCreator(usersList));
        },
        toggleLoaderFollowingList: (isFetching) => {
            dispatch(toggleLoaderFollowingListCreator(isFetching));
        },
        toggleLoaderAllUsers: (isFetching) => {
            dispatch(toggleLoaderAllUsersCreator(isFetching));
        },
    };
}

const UserListContainer = connect(mapStateToProps, mapDispatchToProps)(UserListApi);

export default UserListContainer;