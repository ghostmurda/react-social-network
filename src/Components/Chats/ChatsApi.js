import React from "react";
import Chats from "./Chats";
import {getFollowingListReq} from "../../api/api";

class ChatsApi extends React.Component{
    componentDidMount() {
        this.props.toggleLoaderUserList(true);
        getFollowingListReq()
            .then(res => {
                this.props.toggleLoaderUserList(false);
                this.props.getUsers(res);
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