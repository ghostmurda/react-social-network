import React from 'react';
import Post from './Post/Post';
import './Profile.css';

function Profile(props){
    let data;
    if (props.location === undefined){
        data = props.userData;
    } else {
        data = props.location.state;
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
                    <input type="text" placeholder="What's new?"/>
                    <button className="btn">Publish</button>
                </div>
                <Post 
                    name={data.name}
                    text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, vel debitis 
                    voluptate fugit nemo id totam cum facere ad et eos nam ab quia sint accusamus cupiditate, voluptatum fugiat ea! Ullam
                    et perspiciatis alias voluptates, minima cumque hic corrupti optio
                "/>
            
            </div>
        </div>
    );
}

export default Profile;