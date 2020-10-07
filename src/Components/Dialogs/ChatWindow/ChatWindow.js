import React, { useRef, useEffect } from "react";
import Message from "./Message/Message";
import './ChatWindow.css';

function ChatWindow(){
    const endRef = useRef(null);
    useEffect(() => {
        endRef.current.scrollIntoView({ behavior: 'smooth' });
    });
    return (
        <div className="ChatWindow">
            <div className="chat-window">
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <div ref={endRef} />
            </div>
        </div>
    );
}

export default ChatWindow;