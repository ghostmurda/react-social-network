import React from "react";
import './ChatCard.css';
import {NavLink} from "react-router-dom";
import Avatar from "../../Avatar/Avatar";

function ChatCard(props) {
    return (
        <div className="ChatCard">
            <div className="chat-card">
                <Avatar userName={props.name}/>
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