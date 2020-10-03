import React from 'react';
import './../User/User.css';
import {Link} from "react-router-dom";

function User(props){
    return (
        <div className="User">
            <img 
            className="user__avatar" 
            src={`https://api.adorable.io/avatars/64/${props.name}@adorable.png`}
            alt="Loading..."
            />
            <div className="user__description">
                <div className="user__name mini"><Link to={{
                    pathname: `/user/${props.name}`,
                    state: {
                        name: props.name,
                        followers: props.followers,
                        posts: props.posts,
                        following: props.following,
                        info: props.info,
                    }
                }
                }>{props.name}</Link></div>
            </div>
        </div>
    );
}

export default User;