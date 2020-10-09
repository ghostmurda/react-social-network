import {connect} from 'react-redux';
import Chats from "./Chats";
import {addMessageActionCreator} from "../../data/chatReducer";
import {withRouter} from 'react-router-dom';

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
        messageCreator: state.currentUserData.userInfo.name,
        userListData: state.currentUserData.followingList,
    };
};
let mapDispatchToState = (dispatch) => {
    return {
        addMessage: (profile, text, messageCreator) => {
            dispatch(addMessageActionCreator(profile, text, messageCreator));
        }
    };
};

const ChatsContainer = connect(mapPropsToState, mapDispatchToState)(Chats);

export default withRouter(ChatsContainer);