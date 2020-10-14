import React from 'react';
import UserList from "./UserList";
import {getFollowingListReq, getPopularListReq} from "../../api/api";

class UserListApi extends React.Component {
    componentDidMount() {
        this.props.toggleLoaderUserList(true);
        this.props.toggleLoaderPopularList(true);
        getFollowingListReq()
            .then(res => {
                this.props.toggleLoaderUserList(false);
                this.props.getUsers(res);
            });
        getPopularListReq()
            .then(res => {
                this.props.toggleLoaderPopularList(false);
                this.props.getPopularUsers(res);
            });
    }

    render() {
        return (
            <UserList
                userListData={this.props.userListData}
                userSecondaryListData={this.props.userSecondaryListData}
                isFetchingUserList={this.props.isFetchingUserList}
                isFetchingPopularList={this.props.isFetchingPopularList}
            />
        );
    }
}

export default UserListApi;