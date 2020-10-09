import React from "react";
import './Message.css';

function Message(props){
    return (
        <div className="Message">
            <div className="message__creator">
                <img src={`https://api.adorable.io/avatars/32/${props.name}@adorable.png`} alt="Avatar"/>
            </div>
            <div className="message__body">
                {props.text}
            </div>
        </div>
    );
}

export default Message;