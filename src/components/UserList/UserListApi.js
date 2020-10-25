import React from 'react';
import UserList from "./UserList";

class UserListApi extends React.Component {
    constructor(props) {
        super(props);
        this.usersSecondaryListShowMore = this.usersSecondaryListShowMore.bind(this);
    }

    componentDidMount() {
        this.props.onGetFollowingList(this.props.userId);
        this.usersSecondaryListShowMore();
    }

    usersSecondaryListShowMore(skip, pageSize){
        this.props.onGetAllUsersList(skip, pageSize);
    }

    render() {
        return (
            <UserList
                followingListData={this.props.followingListData}
                usersListData={this.props.usersListData}
                isFetchingFollowingList={this.props.isFetchingFollowingList}
                isFetchingUsersList={this.props.isFetchingUsersList}
                showMore={this.usersSecondaryListShowMore}
            />
        );
    }
}

export default UserListApi;