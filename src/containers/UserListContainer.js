import {connect} from "react-redux";
import UserListApi from "../components/UserList/UserListApi";
import {onGetAllUsersThunk, onGetFollowingListThunk} from "../redux/actions/usersActions";
import {
    getFetchingFollowingList,
    getFetchingUsersList,
    getFollowingList,
    getUsersList
} from "../redux/selectors/usersSelectors";
import React from "react";
import {getUserId} from "../redux/selectors/authSelectors";

function UserListContainer(props){
    return (
        <UserListApi followingListData={props.followingListData}
                     usersListData={props.usersListData}
                     isFetchingFollowingList={props.isFetchingFollowingList}
                     isFetchingUsersList={props.isFetchingUsersList}
                     userId={props.userId}
                     onGetFollowingList={props.onGetFollowingList}
                     onGetAllUsersList={props.onGetAllUsersList}
        />
    );
}

let mapStateToProps = (state) => {
    return {
        followingListData: getFollowingList(state),
        usersListData: getUsersList(state),
        isFetchingFollowingList: getFetchingFollowingList(state),
        isFetchingUsersList: getFetchingUsersList(state),
        userId: getUserId(state),
    };
};

let mapDispatchToProps = (dispatch) => {
    return {
        onGetFollowingList: (userId) => {
            dispatch(onGetFollowingListThunk(userId));
        },
        onGetAllUsersList: (skip, pageSize) => {
            dispatch(onGetAllUsersThunk(skip, pageSize));
        },
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserListContainer);
