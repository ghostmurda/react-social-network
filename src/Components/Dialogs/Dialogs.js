import React from "react";
import './Dialogs.css';
import ChatCard from "./ChatCard/ChatCard";
import ChatWindow from "./ChatWindow/ChatWindow";
import {withRouter} from 'react-router-dom';

function Dialogs(props){
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
    return (
        <div className="Dialogs">
            <div className="dialogs-page">
                <div className="dialogs-page__window">
                    <ChatWindow data={data}/>
                </div>
                <div className="dialogs-page__input">
                    <textarea placeholder="Write a message" disabled={textAreaDisabled}/>
                    <div className="input__btn-wrapper">
                        <button className="btn">Send</button>
                    </div>
                </div>
                <div className="dialogs-page__chats">
                    <div className="secondary-list__header">Chats</div>
                    <span>&nbsp;</span>
                    {chatsElements}
                </div>
            </div>
        </div>
    );
}

export default withRouter(Dialogs);