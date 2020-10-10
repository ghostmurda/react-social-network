import React from 'react';
import './UserList.css';
import UserCard from './UserCard/UserCard';
import * as axios from 'axios';

function UserList(props) {

    axios.get('http://localhost:8080/users')
        .then(responce => {
            props.getUsers(responce.data);
        })

    let userListElements = props.userListData.map((item, i) => {
        return <UserCard
            key={i}
            name={item.name}
            posts={item.posts}
            followers={item.followers}
            following={item.following}
            info={item.info}
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
        />;
    });
    return (
        <div className="UserList">
            <div className="users-page">
                <div className="users-page__list">
                    {userListElements}
                </div>
                <div className="users-page__secondary-list">
                    <div className="secondary-list__header">Popular</div>
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