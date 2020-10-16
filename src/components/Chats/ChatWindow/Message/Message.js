import React from "react";
import './Message.css';

function Message(props){
    return (
        <div className="Message">
            <div className="message__creator">
                <img src={`https://avatars.dicebear.com/api/avataaars/${props.name}.svg`} alt="Avatar"/>
            </div>
            <div className="message__body">
                {props.text}
            </div>
        </div>
    );
}

export default Message;