import React from "react";
import './Message.css';
import Avatar from "../../../Avatar/Avatar";

function Message(props){
    return (
        <div className="Message">
            <div className="message__creator">
                <Avatar userName={props.name}/>
            </div>
            <div className="message__body">
                {props.text}
            </div>
        </div>
    );
}

export default Message;