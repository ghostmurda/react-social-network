import React from 'react';
import UserList from "./UserList";
import {getAllUsersListReq, getFollowingListReq} from "../../api/api";

class UserListApi extends React.Component {
    componentDidMount() {
        this.props.toggleLoaderFollowingList(true);
        this.props.toggleLoaderAllUsers(true);
        getFollowingListReq(this.props.userId)
            .then(res => {
                this.props.toggleLoaderFollowingList(false);
                this.props.getFollowingList(res);
            });
        getAllUsersListReq()
            .then(res => {
                this.props.toggleLoaderAllUsers(false);
                this.props.getAllUsers(res);
            });
    }

    render() {
        return (
            <UserList
                followingListData={this.props.followingListData}
                usersListData={this.props.usersListData}
                isFetchingFollowingList={this.props.isFetchingFollowingList}
                isFetchingUsersList={this.props.isFetchingUsersList}
            />
        );
    }
}

export default UserListApi;