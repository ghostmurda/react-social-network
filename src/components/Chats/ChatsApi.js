import React from "react";
import Chats from "./Chats";

class ChatsApi extends React.Component{
    componentDidMount() {
        this.props.onGetFollowingList(this.props.userId);
    }
    render() {
        return (
            <Chats
                data={this.props.data}
                messageCreator={this.props.messageCreator}
                followingListData={this.props.followingListData}
                isFetchingFollowingList={this.props.isFetchingFollowingList}
                addMessage={this.props.addMessage}
            />
        );
    }
}

export default ChatsApi;