import React from "react";
//import PostsWall from "../Profile/PostsWall/PostsWall";
import './ProfilePage.css';
import Loader from "../Loader/Loader";

function ProfilePage(props) {
    return (
        <>
            {props.isFetchingProfile ? <Loader/> :
                <div className="Profile">
                    <div className="profile">
                        <div className="profile__avatar">
                            <img src={`https://api.adorable.io/avatars/190/${props.data.name}@adorable.png`}
                                 alt="Avatar"/>
                        </div>
                        <div className="profile__description">
                            <div className="description__name">{props.data.name}</div>
                            <div className="description__main">{props.data.info}</div>
                            <div className="description__footer">
                                <div className="description__footer__item">
                                    <span className="item__num">{props.data.followers}</span><br/>
                                    <span className="item__name">followers</span>
                                </div>
                                <div className="description__footer__item">
                                    <span className="item__num">{props.data.posts}</span><br/>
                                    <span className="item__name">posts</span>
                                </div>
                                <div className="description__footer__item">
                                    <span className="item__num">{props.data.following}</span><br/>
                                    <span className="item__name">following</span>
                                </div>
                            </div>
                        </div>
                        <div className="profile__followers">
                            <span className="followers__title">Followers</span>
                            <span className="followers__num">{props.data.followers}</span>
                            <div className="followers__main"></div>
                        </div>
                        <div className="profile__following">
                            <span className="followers__title">Following</span>
                            <span className="followers__num">{props.data.following}</span>
                            <div className="followers__main"></div>
                        </div>
                        <div className="profile__input">
                            <input type="text" placeholder="What's new?"/>
                            <button className="btn">Publish</button>
                        </div>
                        {/*{<PostsWall postsData={props.data.userPosts[props.data.userData.name]}/>}*/}
                    </div>
                </div>
            }
        </>
    );
}

export default ProfilePage;