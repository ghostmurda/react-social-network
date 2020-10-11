import React from 'react';
import * as axios from 'axios';
import UserList from "./UserList";

class UserListApi extends React.Component{
    componentDidMount() {
        const url = 'https://test-social-network-api.herokuapp.com/api/users';
        axios.get(`${url}/following`)
            .then(responce => {
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
            />
        );
    }
}

export default UserListApi;