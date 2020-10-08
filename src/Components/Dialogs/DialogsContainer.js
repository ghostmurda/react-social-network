import React from "react";
import {withRouter} from 'react-router-dom';
import {addMessageActionCreator} from "../../data/chatReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

// function DialogsContainer(props){
//     let data;
//     let textAreaDisabled = false;
//     if (!props.location.state){
//         data = 'No data';
//         textAreaDisabled = true;
//     } else {
//         data = props.location.state;
//     }
//     let chatsElements = props.userListData.map((item, i) => {
//         return <ChatCard
//             key={i}
//             name={item.name}
//             chatData={props.chats[item.name]}
//         />
//     });
//     let addMessage = (profile, text, messageCreator = props.userData.name) => {
//         props.dispatch(addMessageActionCreator(profile, text, messageCreator));
//     }
//     return (
//         <Dialogs
//             addMessage={addMessage}
//             chatsElements={chatsElements}
//             textAreaDisabled={textAreaDisabled}
//             data={data}
//         />
//     );
// }

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