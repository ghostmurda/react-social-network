import React from "react";
import ChatCard from "./ChatCard/ChatCard";
import ChatWindow from "./ChatWindow/ChatWindow";
import './Chats.css';
import Loader from "../Loader/Loader";
import InputForm from "../InputForm/InputForm";

function Chats(props) {
    let addMessage = (values) => {
        props.addMessage(props.data.chatName, values.messageInput, props.messageCreator);
        values.messageInput = '';
    }
    return (
        <div className="Chats">
            <div className="chats-page">
                <div className="chats-page__window">
                    <div className="window__header">{props.data.chatName}</div>
                    <ChatWindow data={props.data.messages[props.data.chatName]}/>
                </div>
                <InputForm onSubmit={addMessage}
                           fieldName={"messageInput"}
                           formClassName={"chats-page__input"}
                           inputPlaceholder={"Write a message"}
                           inputClassName={"chats-page__input__textarea"}
                           btnName={"Send"}
                />
                <div className="chats-page__chats">
                    <div className="secondary-list__header">Chats</div>
                    <span>&nbsp;</span>
                    {props.isFetchingFollowingList ?
                        <Loader additional="small"/> :
                        props.followingListData.map((item, i) => <ChatCard key={i} name={item.name}/>)
                    }
                </div>
            </div>
        </div>
    );

}

export default Chats;