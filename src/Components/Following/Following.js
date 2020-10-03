import React from 'react';
import './Following.css';
import User from './User/User';
import UserMini from './UserMini/UserMini'


function Following() {
    let userListData = [
        {name: "Pavel Durov", posts: "3", followers: "4", following: "20", info: "Creator of VK and Telegram"},
        {name: "Jon Snow", posts: "234", followers: "53", following: "5", info: "Son of Lyanna Stark and Rhaegar Targaryen"},
        {name: "Test User", posts: "0", followers: "0", following: "100", info: "Test info"},
        {name: "Dana West", posts: "427", followers: "568", following: "23", info: "I love myself"},
        {name: "Roland Worthington", posts: "15", followers: "99", following: "6", info: "Worthington is like Washington but worth"},
    ];
    let userListElements = userListData.map((item, i) => {
        return <User key={i} name={item.name} posts={item.posts} followers={item.followers} following={item.following} info={item.info}/>;
    });

    let userPopularData = [
        {name: "Jon Snow", posts: "234", followers: "53", following: "5", info: "Son of Lyanna Stark and Rhaegar Targaryen"},
        {name: "Dana West", posts: "427", followers: "568", following: "23", info: "I love myself"},
        {name: "Roland Worthington", posts: "15", followers: "99", following: "6", info: "Worthington is like Washington but worth"},
    ].sort((a, b) => b.followers - a.followers);
    let userPopularElements = userPopularData.map((item, i) => {
        return <UserMini key={i} name={item.name} posts={item.posts} followers={item.followers} following={item.following} info={item.info}/>;
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