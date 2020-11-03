import React from "react";
import './ProfilePage.css';
import Loader from "../Loader/Loader";
import PostsWall from "./PostsWall/PostsWall";
import InputForm from "../InputForm/InputForm";
import Avatar from "../Avatar/Avatar";
import ProfileDescriptionInfo from "./ProfileDescriptionInfo/ProfileDescriptionInfo";

const followersItems = (num) => {
    let arr = [];
    while(num){
        num--;
        arr.push(
            <div key={num} className="followers__item">
                <Avatar userName={String(Math.random())}/>
            </div>)
    }
    return arr;
}

const descriptionFooterItem = (data, name) => {
    return (
        <div className="description__footer__item">
            <span className="item__num">{data}</span><br/>
            <span className="item__name">{name}</span>
        </div>
    )
}

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
                                {descriptionFooterItem(props.data.followers, 'followers')}
                                {descriptionFooterItem(props.data.posts, 'posts')}
                                {descriptionFooterItem(props.data.following, 'following')}
                            </div>
                        </div>
                        <div className="profile__followers">
                            <span className="followers__title">Followers</span>
                            <span className="followers__num">{props.data.followers}</span>
                            <div className="followers__main">
                                {followersItems((+props.data.followers <= 6) ? +props.data.followers : 6 )}
                            </div>
                        </div>
                        <div className="profile__following">
                            <span className="followers__title">Following</span>
                            <span className="followers__num">{props.data.following}</span>
                            <div className="followers__main">
                                {followersItems((+props.data.following <= 6) ? +props.data.following : 6 )}
                            </div>
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