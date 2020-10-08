import React, {useRef} from "react";
import './Dialogs.css';
import ChatWindow from "./ChatWindow/ChatWindow";
import ChatCard from "./ChatCard/ChatCard";

function Dialogs(props){
    const newMessageElement = useRef();
    let addMessage = () => {
        if (props.data !== 'No data'){
            let profile = props.data.chatName;
            let text = newMessageElement.current.value;
            if (!text){
                return false;
            }
            props.addMessage(profile, text, props.messageCreator);
            newMessageElement.current.value = '';
        }
    }
    let chatsElements = props.userListData.map((item, i) => {
        return <ChatCard
            key={i}
            name={item.name}
            chatData={props.chatsData[item.name]}
        />
    });
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
                    {chatsElements}
                </div>
            </div>
        </div>
    );
}

export default Dialogs;