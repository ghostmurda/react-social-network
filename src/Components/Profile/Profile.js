import React, {useRef} from 'react';
import './Profile.css';
import PostsWall from "./PostsWall/PostsWall";

function Profile(props){
    let newPostElement = useRef();
    let addPost = () => {
        let profile = props.data.userData.name;
        let text = newPostElement.current.value;
        if (!text) {
            return false;
        }
        props.addPost(profile, text)
        newPostElement.current.value = '';
    }

    return (
        <div className="Profile">
            <div className="profile">
                <div className="profile__avatar">
                    <img src={`https://api.adorable.io/avatars/190/${props.data.userData.name}@adorable.png`} alt="Loading..."/>
                </div>
                <div className="profile__description">
                    <div className="description__name">{props.data.userData.name}</div>
                    <div className="description__main">{props.data.userData.info}</div>
                    <div className="description__footer">
                        <div className="description__footer__item">
                            <span className="item__num">{props.data.userData.followers}</span><br/>
                            <span className="item__name">followers</span>
                        </div>
                        <div className="description__footer__item">
                            <span className="item__num">{props.data.userData.posts}</span><br/>
                            <span className="item__name">posts</span>
                        </div>
                        <div className="description__footer__item">
                            <span className="item__num">{props.data.userData.following}</span><br/>
                            <span className="item__name">following</span>
                        </div>
                    </div>
                </div>
                <div className="profile__followers">
                    <span className="followers__title">Followers</span>
                    <span className="followers__num">{props.data.userData.followers}</span>
                    <div className="followers__main"></div>
                </div>
                <div className="profile__following">
                    <span className="followers__title">Following</span>
                    <span className="followers__num">{props.data.userData.following}</span>
                    <div className="followers__main"></div>
                </div>
                <div className="profile__input">
                    <input type="text" placeholder="What's new?" ref={newPostElement}/>
                    <button className="btn" onClick={addPost}>Publish</button>
                </div>
                <PostsWall postsData={props.data.userPosts[props.data.userData.name]}/>
            </div>
        </div>
    );
}

export default Profile;