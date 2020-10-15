import {connect} from "react-redux";
import UserListApi from "./UserListApi";
import {onGetAllUsersThunk, onGetFollowingListThunk} from "../../redux/reducers/usersReducer";

let mapStateToProps = (state) => {
    return {
        followingListData: state.usersData.followingList,
        usersListData: state.usersData.usersList,
        isFetchingFollowingList: state.usersData.isFetchingFollowingList,
        isFetchingUsersList: state.usersData.isFetchingUsersList,
        userId: state.authData.userId,
    };
};

let mapDispatchToProps = (dispatch) => {
    return {
        onGetFollowingList: (userId) => {
            dispatch(onGetFollowingListThunk(userId));
        },
        onGetAllUsersList: () => {
            dispatch(onGetAllUsersThunk());
        },
    };
}

const UserListContainer = connect(mapStateToProps, mapDispatchToProps)(UserListApi);

export default UserListContainer;