import {connect} from "react-redux";
import UserListApi from "./UserListApi";
import {onGetAllUsersThunk, onGetFollowingListThunk} from "../../redux/actions/usersActions";
import {
    getFetchingFollowingList,
    getFetchingUsersList,
    getFollowingList,
    getUsersList
} from "../../redux/selectors/usersSelectors";

let mapStateToProps = (state) => {
    return {
        followingListData: getFollowingList(state),
        usersListData: getUsersList(state),
        isFetchingFollowingList: getFetchingFollowingList(state),
        isFetchingUsersList: getFetchingUsersList(state),
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