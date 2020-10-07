import React, { useRef, useEffect } from "react";
import Message from "./Message/Message";
import './ChatWindow.css';

function ChatWindow(props){
    let notification;
    let messageElements;
    if (props.data === 'No data'){
        notification = 'No chat selected';
    } else {
        messageElements = props.data.chatData.map((item, i) => {
           return <Message
               key={i}
               name={item.name}
               text={item.text}
           />
        });
    }
    const endRef = useRef(null);
    useEffect(() => {
        endRef.current.scrollIntoView({behavior: 'smooth'});
    });
    return (
        <div className="ChatWindow">
            <div className="chat-window">
                <span className="chat-window__notification">{notification}</span>
                {messageElements}
                <div ref={endRef} />
            </div>
        </div>
    );
}

export default ChatWindow;