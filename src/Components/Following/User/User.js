import React from 'react';
import './User.css';
import {Link} from 'react-router-dom';

function User(props){
    return (
        <div className="User">
            <img 
            className="user__avatar" 
            src={`https://api.adorable.io/avatars/128/${props.name}@adorable.png`} 
            />
            <div className="user__description">
                <div className="user__name"><Link to={{
                    pathname: `/user/${props.name}`,
                    state: {
                        name: props.name,
                        followers: props.followers,
                        posts: props.posts,
                    }
                }
                }>{props.name}</Link></div>
                <div className="user__info"><strong>Posts:</strong> {props.posts} <strong>Followers:</strong> {props.followers}</div>
            </div>
            <div className="user__btn-wrapper">
                <button className="btn">Unfollow</button>
            </div>
        </div>
    );
}

export default User;