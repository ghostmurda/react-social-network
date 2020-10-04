import React from 'react';
import './UserList.css';
import UserCard from './UserCard/UserCard';

function UserList(props) {
    let userListElements = props.userListData.map((item, i) => {
        return <UserCard
            key={i}
            name={item.name}
            posts={item.posts}
            followers={item.followers}
            following={item.following}
            info={item.info}
            postsData={props.profilePosts}
        />;
    });
    let userSecondaryListElements = props.userSecondaryListData.map((item, i) => {
        return <UserCard
            key={i}
            name={item.name}
            posts={item.posts}
            followers={item.followers}
            following={item.following}
            info={item.info}
            postsData={props.profilePosts}
        />;
    });

    return (
        <div className="UserList">
            <div className="users-page">
                <div className="users-page__list">
                    {userListElements}
                </div>
                <div className="users-page__secondary-list">
                    <div className="secondary-list__header">{props.secondaryListType}</div>
                    <span>&nbsp;</span>
                    <div className="UserSmallCard">
                        {userSecondaryListElements}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserList;