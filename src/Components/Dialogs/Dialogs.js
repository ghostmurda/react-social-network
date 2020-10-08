import React, {useRef} from "react";
import './Dialogs.css';
import ChatCard from "./ChatCard/ChatCard";
import ChatWindow from "./ChatWindow/ChatWindow";

function Dialogs(props){
    const newMessageElement = useRef();
    let addMessage = () => {
        if (props.data !== 'No data'){
            let profile = props.data.chatName;
            let text = newMessageElement.current.value;
            if (!text){
                return false;
            }
            props.addMessage(profile, text);
            newMessageElement.current.value = '';
        }
    }
    return (
        <div className="Dialogs">
            <div className="dialogs-page">
                <div className="dialogs-page__window">
                    <div className="window__header">{props.data.chatName}</div>
                    <ChatWindow data={props.data}/>
                </div>
                <div className="dialogs-page__input">
                    <textarea
                        placeholder="Write a message"
                        disabled={props.textAreaDisabled}
                        ref={newMessageElement}
                    />
                    <div className="input__btn-wrapper">
                        <button className="btn" onClick={addMessage}>Send</button>
                    </div>
                </div>
                <div className="dialogs-page__chats">
                    <div className="secondary-list__header">Chats</div>
                    <span>&nbsp;</span>
                    {props.chatsElements}
                </div>
            </div>
        </div>
    );
}

export default Dialogs;