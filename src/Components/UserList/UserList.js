import React from 'react';
import './UserList.css';
import UserCard from './UserCard/UserCard';
import Loader from "../Loader/Loader";

function UserList(props) {
    let userListElements = props.userListData.map((item, i) => {
        return <UserCard
            key={i}
            id={item.id}
            name={item.name}
            posts={item.posts}
            followers={item.followers}
        />;
    });
    let userSecondaryListElements = props.userSecondaryListData.map((item, i) => {
        return <UserCard
            key={i}
            id={item.id}
            name={item.name}
            posts={item.posts}
            followers={item.followers}
        />;
    });
    return (
        <div className="UserList">
            <div className="users-page">
                <div className="users-page__list">
                    {props.isFetchingUserList ? <Loader/> : userListElements}
                </div>
                <div className="users-page__secondary-list">
                    <div className="secondary-list__header">Popular</div>
                    <span>&nbsp;</span>
                    <div className="UserSmallCard">
                        {props.isFetchingPopularList ? <Loader additional="small"/> : userSecondaryListElements}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserList;