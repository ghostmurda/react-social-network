import React from "react";
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {addMessageActionCreator} from "../redux/reducers/chatReducer";
import {onGetFollowingListThunk} from "../redux/actions/usersActions";
import ChatsApi from "../components/Chats/ChatsApi";
import {getUserId, getUserName} from "../redux/selectors/authSelectors";
import {getFetchingFollowingList, getFollowingList} from "../redux/selectors/usersSelectors";

function ChatsContainer(props){
    return (
        <ChatsApi data={props.data}
                  messageCreator={props.messageCreator}
                  userId={props.userId}
                  followingListData={props.followingListData}
                  isFetchingFollowingList={props.isFetchingFollowingList}
                  addMessage={props.addMessage}
                  onGetFollowingList={props.onGetFollowingList}
        />
    );
}

let mapPropsToState = (state, ownProps) => {
    let chatData = {
        chatName: Object.keys(state.chatsData)[0],
        messages: state.chatsData,
    };
    if (ownProps.location.state) {
        chatData.chatName = ownProps.location.state.chatName;
    }
    return {
        data: chatData,
        messageCreator: getUserName(state),
        userId: getUserId(state),
        followingListData: getFollowingList(state),
        isFetchingFollowingList: getFetchingFollowingList(state),
    };
};
let mapDispatchToState = (dispatch) => {
    return {
        addMessage: (profile, text, messageCreator) => {
            dispatch(addMessageActionCreator(profile, text, messageCreator));
        },
        onGetFollowingList: (userId) => {
            dispatch(onGetFollowingListThunk(userId));
        },
    };
};

export default withRouter(connect(mapPropsToState, mapDispatchToState)(ChatsContainer));
