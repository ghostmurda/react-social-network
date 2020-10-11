import React from "react";
import ChatCard from "./ChatCard/ChatCard";
import ChatWindow from "./ChatWindow/ChatWindow";
import './Chats.css';
import * as axios from "axios";

class Chats extends React.Component{
    constructor(props) {
        super(props);
        this.newMessageElement = React.createRef();
        this.addMessage = this.addMessage.bind(this);
    }
    addMessage = function (){
        let profile = this.props.data.chatName;
        let text = this.newMessageElement.current.value;
        if (!text){
            return false;
        }
        this.props.addMessage(profile, text, this.props.messageCreator);
        this.newMessageElement.current.value = '';
    }
    componentDidMount() {
        axios.get('https://test-social-network-api.herokuapp.com/api/users')
            .then(responce => {
                this.props.getUsers(responce.data);
            })
    }
    render() {
        return (
            <div className="Chats">
                <div className="chats-page">
                    <div className="chats-page__window">
                        <div className="window__header">{this.props.data.chatName}</div>
                        <ChatWindow data={this.props.data.messages[this.props.data.chatName]}/>
                    </div>
                    <div className="chats-page__input">
                        <textarea placeholder="Write a message" ref={this.newMessageElement}/>
                        <div className="input__btn-wrapper">
                            <button className="btn" onClick={this.addMessage}>Send</button>
                        </div>
                    </div>
                    <div className="chats-page__chats">
                        <div className="secondary-list__header">Chats</div>
                        <span>&nbsp;</span>
                        {this.props.userListData.map((item, i) => {
                            return <ChatCard key={i} name={item.name}/>
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

export default Chats;