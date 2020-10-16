import React, {useRef} from "react";
import ChatCard from "./ChatCard/ChatCard";
import ChatWindow from "./ChatWindow/ChatWindow";
import './Chats.css';
import Loader from "../Loader/Loader";

function Chats(props) {
    let newMessageElement = useRef();
    let addMessage = () => {
        let profile = props.data.chatName;
        let text = newMessageElement.current.value;
        if (!text) {
            return false;
        }
        props.addMessage(profile, text, props.messageCreator);
        newMessageElement.current.value = '';
    }
    let chatsElements = props.followingListData.map((item, i) => {
        return <ChatCard key={i} name={item.name}/>
    });
    return (
        <div className="Chats">
            <div className="chats-page">
                <div className="chats-page__window">
                    <div className="window__header">{props.data.chatName}</div>
                    <ChatWindow data={props.data.messages[props.data.chatName]}/>
                </div>
                <div className="chats-page__input">
                    <textarea placeholder="Write a message" ref={newMessageElement}/>
                    <div className="input__btn-wrapper">
                        <button className="btn" onClick={addMessage}>Send</button>
                    </div>
                </div>
                <div className="chats-page__chats">
                    <div className="secondary-list__header">Chats</div>
                    <span>&nbsp;</span>
                    {props.isFetchingFollowingList ? <Loader additional="small"/> : chatsElements}
                </div>
            </div>
        </div>
    );

}

export default Chats;