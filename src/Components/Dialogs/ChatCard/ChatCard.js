import React from "react";
import './ChatCard.css';
import {Link} from "react-router-dom";

function ChatCard(props){
    return (
        <div className="ChatCard">
            <div className="chat-card">
                <img
                    className="chat-card__avatar"
                    src={`https://api.adorable.io/avatars/128/${props.name}@adorable.png`}
                    alt="Avatar"
                />
                <div className="chat-card__description">
                    <div className="chat-card__name">
                        <Link to={{
                            pathname: `/dialogs/${props.name}`,
                            state: {
                                chatName: props.name,
                                chatData: props.chatData,
                            }
                        }}>
                            {props.name}
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ChatCard;