import React from 'react';
import './Post.css';

function Post(props){
    return (
        <div className="Post">
            <div className="post__title">
                <div className="post__creator-avatar">
                    <img src={`https://api.adorable.io/avatars/70/${props.name}@adorable.png`} alt="Loading..."/>
                </div>
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