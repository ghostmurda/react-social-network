import React from 'react';
import './Post.css';

function Post(props) {
    return (
        <div className="Post">
            <div className="post__title">
                <img className="post__creator-avatar"
                     src={`https://avatars.dicebear.com/api/avataaars/${props.name}.svg`}
                     alt="Avatar"
                />
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