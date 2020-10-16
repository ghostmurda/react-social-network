import React from 'react';
import './UserCard.css';
import {Link} from 'react-router-dom';

function UserCard(props) {
    return (
        <div className="UserCard">
            <div className="user-card">
                <img
                    className="user-card__avatar"
                    src={`https://avatars.dicebear.com/api/avataaars/${props.name}.svg`}
                    alt="Avatar"
                />
                <div className="user-card__description">
                    <div className="user-card__name">
                        <Link to={`/user/${props.id}`}>
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