import React from "react";
import './ProfilePage.css';
import Loader from "../Loader/Loader";
import PostsWall from "./PostsWall/PostsWall";
import InputForm from "../InputForm/InputForm";
import Avatar from "../Avatar/Avatar";
import ProfileDescriptionInfo from "./ProfileDescriptionInfo/ProfileDescriptionInfo";

function ProfilePage(props) {
    let addPost = (values) => {
        props.onProfileAddPost(props.userId, props.userName, values.postText);
        values.postText = '';
    }

    return (
        <>
            {props.isFetchingProfile ? <Loader/> :
                <div className="Profile">
                    <div className="profile">
                        <div className="profile__avatar">
                            <Avatar userName={props.data.name}/>
                        </div>
                        <div className="profile__description">
                            <div className="description__name">{props.data.name}</div>
                            <ProfileDescriptionInfo
                                onChangeProfileInfo={props.onChangeProfileInfo}
                                info={props.data.info}
                                userId={props.userId}
                                authUserId={props.authUserId}
                            />
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
                            <div className="followers__main"> </div>
                        </div>
                        <div className="profile__following">
                            <span className="followers__title">Following</span>
                            <span className="followers__num">{props.data.following}</span>
                            <div className="followers__main"> </div>
                        </div>
                        <InputForm onSubmit={addPost}
                                   fieldName={"postText"}
                                   formClassName={"profile__input"}
                                   inputPlaceholder={"What's new?"}
                                   inputClassName={"postText__input"}
                                   btnName={"Publish"}
                        />
                        <PostsWall postsData={props.data.postsData}/>
                    </div>
                </div>
            }
        </>
    );
}

export default ProfilePage;