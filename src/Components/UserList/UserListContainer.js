import {connect} from "react-redux";
import UserListApi from "./UserListApi";
import {getUsersCreator, toggleLoaderFollowingList} from "../../data/currentUserReducer";
import {getPopularUsersCreator, toggleLoaderPopularList} from "../../data/popularUsersReducer";

let mapStateToProps = (state) => {
    return {
        userListData: state.currentUserData.followingList,
        userSecondaryListData: state.popularUsersData.popularList,
        isFetchingUserList: state.currentUserData.isFetchingFollowingList,
        isFetchingPopularList: state.popularUsersData.isFetchingPopularList,
    };
};

let mapDispatchToProps = (dispatch) => {
    return {
        getUsers: (followingList) => {
            dispatch(getUsersCreator(followingList));
        },
        getPopularUsers: (popularList) => {
            dispatch(getPopularUsersCreator(popularList));
        },
        toggleLoaderUserList: (isFetching) => {
            dispatch(toggleLoaderFollowingList(isFetching));
        },
        toggleLoaderPopularList: (isFetching) => {
            dispatch(toggleLoaderPopularList(isFetching));
        },
    };
}

const UserListContainer = connect(mapStateToProps, mapDispatchToProps)(UserListApi);

export default UserListContainer;