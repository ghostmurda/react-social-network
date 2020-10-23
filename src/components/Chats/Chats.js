import React from "react";
import {Form, Field} from 'react-final-form';
import ChatCard from "./ChatCard/ChatCard";
import ChatWindow from "./ChatWindow/ChatWindow";
import './Chats.css';
import Loader from "../Loader/Loader";

function Chats(props) {
    let addMessage = (values) => {
        props.addMessage(props.data.chatName, values.messageInput, props.messageCreator);
        values.messageInput = '';
    }

    let chatsElements = props.followingListData.map((item, i) => <ChatCard key={i} name={item.name}/>);

    return (
        <div className="Chats">
            <div className="chats-page">
                <div className="chats-page__window">
                    <div className="window__header">{props.data.chatName}</div>
                    <ChatWindow data={props.data.messages[props.data.chatName]}/>
                </div>
                <Form onSubmit={addMessage}
                      validate={values => {
                          const errors = {};
                          if (!values.messageInput){
                              errors.messageInput = 'Required';
                          }
                          return errors;
                      }}
                      render={({handleSubmit, form, submitting, pristine, values}) => (
                          <form className="chats-page__input" onSubmit={handleSubmit}>
                              <Field name="messageInput">
                                  {({input}) => (
                                      <textarea {...input} placeholder="Write a message"/>
                                  )}
                              </Field>
                              <div className="input__btn-wrapper">
                                  <button className="btn" type="submit" disabled={submitting}>
                                      Send
                                  </button>
                              </div>
                          </form>
                      )}
                />
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