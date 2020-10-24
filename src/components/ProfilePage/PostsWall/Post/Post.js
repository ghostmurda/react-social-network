import React from 'react';
import './Post.css';
import Avatar from "../../../Avatar/Avatar";

function Post(props) {
    return (
        <div className="Post">
            <div className="post__title">
                <Avatar avatarClassName={"post__creator-avatar"} userName={props.name}/>
                <div className="post__creator-name">{props.name}</div>
            </div>
            <div className="post__body">{props.text}</div>
            <div className="post__footer">
                <div className="like-icon">&#10084;</div>
            </div>
        </div>
    );
}

export default Post;