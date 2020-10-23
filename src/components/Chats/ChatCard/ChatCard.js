import React from "react";
import './ChatCard.css';
import {NavLink} from "react-router-dom";

function ChatCard(props) {
    return (
        <div className="ChatCard">
            <div className="chat-card">
                <img
                    className="chat-card__avatar"
                    src={`https://avatars.dicebear.com/api/avataaars/${props.name}.svg`}
                    alt="Avatar"
                />
                <div className="chat-card__description">
                    <div className="chat-card__name">
                        <NavLink
                            activeClassName="chat-card__name-active"
                            to={{
                                pathname: `/dialogs/${props.name}`,
                                state: {
                                    chatName: props.name,
                                }
                            }}>
                            {props.name}
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ChatCard;