import React from 'react';
import * as axios from 'axios';
import UserList from "./UserList";
import loader from '../../img/loader.svg';

class UserListApi extends React.Component {
    componentDidMount() {
        const url = 'https://test-social-network-api.herokuapp.com/api/users';
        this.props.toggleLoaderUserList(true);
        axios.get(`${url}/following`)
            .then(responce => {
                this.props.toggleLoaderUserList(false);
                this.props.getUsers(responce.data);
            });
        axios.get(`${url}/popular?skip=0&pageSize=5`)
            .then(response => {
                this.props.getPopularUsers(response.data);
            });
    }

    render() {
        return (
            <UserList
                userListData={this.props.userListData}
                userSecondaryListData={this.props.userSecondaryListData}
                isFetchingUserList={this.props.isFetchingUserList}
            />
        );
    }
}

export default UserListApi;