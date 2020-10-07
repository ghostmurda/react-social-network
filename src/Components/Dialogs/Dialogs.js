import React from "react";
import './Dialogs.css';
import ChatCard from "./ChatCard/ChatCard";
import ChatWindow from "./ChatWindow/ChatWindow";

function Dialogs(){
    return (
        <div className="Dialogs">
            <div className="dialogs-page">
                <div className="dialogs-page__window">
                    <ChatWindow />
                </div>
                <div className="dialogs-page__input">
                    <textarea placeholder="Write a message"/>
                    <div className="input__btn-wrapper">
                        <button className="btn">Send</button>
                    </div>
                </div>
                <div className="dialogs-page__chats">
                    <div className="secondary-list__header">Chats</div>
                    <span>&nbsp;</span>
                    <ChatCard name="Daniel" />
                </div>
            </div>
        </div>
    );
}

export default Dialogs;