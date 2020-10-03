import React from 'react';
import './Following.css';
import User from './User/User';
import UserMini from './UserMini/UserMini'


function Following(props) {
    let userListElements = props.userListData.map((item, i) => {
        return <User key={i} name={item.name} posts={item.posts} followers={item.followers} following={item.following} info={item.info}/>;
    });
    let popularUsersElements = props.popularUsersData.map((item, i) => {
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
                    {popularUsersElements}
                </div>
            </div>
        </div>
    );
}

export default Following;