import React, {useRef, useEffect} from "react";
import Message from "./Message/Message";
import './ChatWindow.css';

function ChatWindow(props) {
    let messageElements;
    messageElements = props.data.map((item, i) => {
        return <Message
            key={i}
            name={item.name}
            text={item.text}
        />
    });

    const endRef = useRef(null);
    useEffect(() => {
        endRef.current.scrollIntoView({behavior: 'smooth'});
    });
    return (
        <div className="ChatWindow">
            <div className="chat-window">
                {messageElements}
                <div ref={endRef}/>
            </div>
        </div>
    );
}

export default ChatWindow;