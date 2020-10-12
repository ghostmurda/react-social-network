import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {addMessageActionCreator} from "../../data/chatReducer";
import {getUsersCreator, toggleLoaderFollowingList} from "../../data/currentUserReducer";
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
        messageCreator: state.currentUserData.userInfo.name,
        userListData: state.currentUserData.followingList,
        isFetchingUserList: state.currentUserData.isFetchingFollowingList,
    };
};
let mapDispatchToState = (dispatch) => {
    return {
        addMessage: (profile, text, messageCreator) => {
            dispatch(addMessageActionCreator(profile, text, messageCreator));
        },
        getUsers: (followingList) => {
            dispatch(getUsersCreator(followingList));
        },
        toggleLoaderUserList: (isFetching) => {
            dispatch(toggleLoaderFollowingList(isFetching));
        },
    };
};

const ChatsContainer = connect(mapPropsToState, mapDispatchToState)(ChatsApi);

export default withRouter(ChatsContainer);