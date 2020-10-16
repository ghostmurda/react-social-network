import React from 'react';
import UserList from "./UserList";

class UserListApi extends React.Component {
    componentDidMount() {
        this.props.onGetFollowingList(this.props.userId);
        this.props.onGetAllUsersList();
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