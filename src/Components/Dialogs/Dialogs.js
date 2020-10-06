import React from "react";
import './Dialogs.css';

function Dialogs(){
    return (
        <div className="Dialogs">
            <div className="dialogs-page">
                <div className="dialogs-page__window">

                </div>
                <div className="dialogs-page__input">
                    <input type="text" placeholder="Write a message" />
                    <button className="btn">Send</button>
                </div>
                <div className="dialogs-page__chats">

                </div>
            </div>
        </div>
    );
}

export default Dialogs;