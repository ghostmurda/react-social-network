import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {addMessageActionCreator} from "../../redux/chatReducer";
import {getFollowingUsersCreator, toggleLoaderFollowingListCreator} from "../../redux/usersReducer";
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
        followingListData: state.usersData.followingList,
        isFetchingFollowingList: state.usersData.isFetchingFollowingList,
    };
};
let mapDispatchToState = (dispatch) => {
    return {
        addMessage: (profile, text, messageCreator) => {
            dispatch(addMessageActionCreator(profile, text, messageCreator));
        },
        getFollowingList: (followingList) => {
            dispatch(getFollowingUsersCreator(followingList));
        },
        toggleLoaderFollowingList: (isFetching) => {
            dispatch(toggleLoaderFollowingListCreator(isFetching));
        },
    };
};

const ChatsContainer = connect(mapPropsToState, mapDispatchToState)(ChatsApi);

export default withRouter(ChatsContainer);