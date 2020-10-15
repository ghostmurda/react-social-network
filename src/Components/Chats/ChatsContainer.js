import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {addMessageActionCreator} from "../../redux/chatReducer";
import {onGetFollowingListThunk} from "../../redux/usersReducer";
import ChatsApi from "./ChatsApi";

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
        messageCreator: state.authData.userName,
        userId: state.authData.userId,
        followingListData: state.usersData.followingList,
        isFetchingFollowingList: state.usersData.isFetchingFollowingList,
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

const ChatsContainer = connect(mapPropsToState, mapDispatchToState)(ChatsApi);

export default withRouter(ChatsContainer);