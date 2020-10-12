import React from "react";
import * as axios from "axios";
import Chats from "./Chats";

class ChatsApi extends React.Component{
    componentDidMount() {
        const url = 'https://test-social-network-api.herokuapp.com/api/users';
        this.props.toggleLoaderUserList(true);
        axios.get(`${url}/following`)
            .then(responce => {
                this.props.toggleLoaderUserList(false);
                this.props.getUsers(responce.data);
            })
    }
    render() {
        return (
            <Chats
                data={this.props.data}
                messageCreator={this.props.messageCreator}
                userListData={this.props.userListData}
                isFetchingUserList={this.props.isFetchingUserList}
                addMessage={this.props.addMessage}
            />
        );
    }
}

export default ChatsApi;