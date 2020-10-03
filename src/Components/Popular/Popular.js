import React from "react";
import User from "../Following/User/User";
import UserMini from '../Following/UserMini/UserMini'

function Popular(props){
    let popularUsersElements = props.popularUsersData.map((item, i) => {
        return <User key={i} name={item.name} posts={item.posts} followers={item.followers} following={item.following} info={item.info}/>;
    });
    let followingElements = props.userListData.map((item, i) => {
        return <UserMini key={i} name={item.name} posts={item.posts} followers={item.followers} following={item.following} info={item.info}/>;
    });
    return (
        <div className="Popular">
            <div className="users-page">
                <div className="user-list">
                    {popularUsersElements}
                </div>
                <div className="users-page__secondary">
                    <div className="secondary__header">Following</div>
                    <span>&nbsp;</span>
                    {followingElements}
                </div>
            </div>
        </div>
    );
}

export  default Popular;