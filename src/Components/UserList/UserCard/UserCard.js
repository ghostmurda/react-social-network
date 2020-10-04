import React from 'react';
import './UserCard.css';
import {Link} from 'react-router-dom';

function UserCard(props) {
    return (
        <div className="UserCard">
            <div className="user-card">
                <img
                    className="user-card__avatar"
                    src={`https://api.adorable.io/avatars/128/${props.name}@adorable.png`}
                    alt="Avatar"
                />
                <div className="user-card__description">
                    <div className="user-card__name">
                        <Link to={{
                            pathname: `/user/${props.name}`,
                            state: {
                                name: props.name,
                                followers: props.followers,
                                posts: props.posts,
                                following: props.following,
                                info: props.info,
                                postsData: props.postsData,
                            }
                        }}>
                            {props.name}
                        </Link>
                    </div>
                    <div className="user-card__info">
                        <div>
                            <span className="user-card__info__elem">
                                Posts
                            </span>
                            &nbsp; {props.posts}
                        </div>
                        <div>
                            <span className="user-card__info__elem">
                                Followers
                            </span>
                            &nbsp; {props.followers}
                        </div>
                    </div>
                </div>
                <div className="user-card__btn-wrapper">
                    <button className="btn">Unfollow</button>
                </div>
            </div>
        </div>
    );
}

export default UserCard;