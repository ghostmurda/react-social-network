import React from 'react';
import './Profile.css';
import PostsWall from "./PostsWall/PostsWall";

function Profile(props){
    let data;
    if (props.location === undefined){
        data = props.userData;
    } else {
        data = props.location.state;
    }
    let newPostElement = React.createRef();
    let addPost = () => {
        let text = newPostElement.current.value;
        console.log(text);
    }

    return (
        <div className="Profile">
            <div className="profile">
                <div className="profile__avatar">
                    <img src={`https://api.adorable.io/avatars/190/${data.name}@adorable.png`} alt="Loading..."/>
                </div>
                <div className="profile__description">
                    <div className="description__name">{data.name}</div>
                    <div className="description__main">{data.info}</div>
                    <div className="description__footer">
                        <div className="description__footer__item">
                            <span className="item__num">{data.followers}</span><br/>
                            <span className="item__name">followers</span>
                        </div>
                        <div className="description__footer__item">
                            <span className="item__num">{data.posts}</span><br/>
                            <span className="item__name">posts</span>
                        </div>
                        <div className="description__footer__item">
                            <span className="item__num">{data.following}</span><br/>
                            <span className="item__name">following</span>
                        </div>
                    </div>
                </div>
                <div className="profile__followers">
                    <span className="followers__title">Followers</span>
                    <span className="followers__num">{data.followers}</span>
                    <div className="followers__main"></div>
                </div>
                <div className="profile__following">
                    <span className="followers__title">Following</span>
                    <span className="followers__num">{data.following}</span>
                    <div className="followers__main"></div>
                </div>
                <div className="profile__input">
                    <input type="text" placeholder="What's new?" ref={newPostElement}/>
                    <button className="btn" onClick={addPost}>Publish</button>
                </div>
                <PostsWall />
            </div>
        </div>
    );
}

export default Profile;