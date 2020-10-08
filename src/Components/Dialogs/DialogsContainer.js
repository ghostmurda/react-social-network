import React from "react";
import {withRouter} from 'react-router-dom';
import {addMessageActionCreator} from "../../data/chatReducer";
import Dialogs from "./Dialogs";
import ChatCard from "./ChatCard/ChatCard";

function DialogsContainer(props){
    let data;
    let textAreaDisabled = false;
    if (!props.location.state){
        data = 'No data';
        textAreaDisabled = true;
    } else {
        data = props.location.state;
    }
    let chatsElements = props.userListData.map((item, i) => {
        return <ChatCard
            key={i}
            name={item.name}
            chatData={props.chats[item.name]}
        />
    });
    let addMessage = (profile, text, messageCreator = props.userData.name) => {
        props.dispatch(addMessageActionCreator(profile, text, messageCreator));
    }
    return (
        <Dialogs
            addMessage={addMessage}
            chatsElements={chatsElements}
            textAreaDisabled={textAreaDisabled}
            data={data}
        />
    );
}

export default withRouter(DialogsContainer);