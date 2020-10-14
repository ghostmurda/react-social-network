import React from "react";
import Chats from "./Chats";
import {getFollowingListReq} from "../../api/api";

class ChatsApi extends React.Component{
    componentDidMount() {
        this.props.toggleLoaderFollowingList(true);
        getFollowingListReq()
            .then(res => {
                this.props.toggleLoaderFollowingList(false);
                this.props.getFollowingList(res);
            })
    }
    render() {
        return (
            <Chats
                data={this.props.data}
                messageCreator={this.props.messageCreator}
                followingListData={this.props.followingListData}
                isFetchingFollowingList={this.props.isFetchingUserList}
                addMessage={this.props.addMessage}
            />
        );
    }
}

export default ChatsApi;