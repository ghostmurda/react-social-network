import React from 'react';
import './Following.css';
import User from './User/User';
import UserMini from './UserMini/UserMini'


function Following() {
    let userListData = [
        {name: "Pavel Durov", posts: "3", followers: "4"},
        {name: "Jon Snow", posts: "234", followers: "53"},
        {name: "Test User", posts: "0", followers: "0"},
        {name: "Dana West", posts: "427", followers: "568"},
        {name: "Roland Worthington", posts: "15", followers: "99"},
    ];
    let userListElements = userListData.map((item, i) => {
        return <User key={i} name={item.name} posts={item.posts} followers={item.followers}/>;
    });

    let userPopularData = [
        {name: "Jon Snow", posts: "234", followers: "53"},
        {name: "Dana West", posts: "427", followers: "568"},
        {name: "Roland Worthington", posts: "15", followers: "99"},
    ].sort((a, b) => b.followers - a.followers);
    let userPopularElements = userPopularData.map((item, i) => {
        return <UserMini key={i} name={item.name} posts={item.posts} followers={item.followers}/>;
    });

    return (
        <div className="Following">
            <div className="following">
                <div className="following__list">
                    {userListElements}
                </div>
                <div className="following__possible">
                    <span>Popular users</span>
                    {userPopularElements}
                </div>
            </div>
        </div>
    );
}

export default Following;