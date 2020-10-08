import {withRouter} from 'react-router-dom';
import {addMessageActionCreator} from "../../data/chatReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

let mapStateToProps = (state, ownProps) => {
    let messagesData;
    let textAreaDisabled = false;
    if (!ownProps.location.state){
        messagesData = 'No data';
        textAreaDisabled = true;
    } else {
        messagesData = ownProps.location.state;
    }
    return {
        messageCreator: state.currentUserData.userInfo.name,
        data: messagesData,
        userListData: state.currentUserData.followingList,
        chatsData: state.chatsData,
        textAreaDisabled: textAreaDisabled,
    };
};

let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: (profile, text, messageCreator) => {
            dispatch(addMessageActionCreator(profile, text, messageCreator));
        }
    };
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default withRouter(DialogsContainer);