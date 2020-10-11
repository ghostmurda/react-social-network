import React from 'react';
import './UserList.css';
import UserCard from './UserCard/UserCard';
import Loader from "../Loader/Loader";

function UserList(props) {
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
                    {props.isFetchingUserList ?
                        <Loader/> :
                        userListElements
                    }
                </div>
                <div className="users-page__secondary-list">
                    <div className="secondary-list__header">Popular</div>
                    <span>&nbsp;</span>
                    <div className="UserSmallCard">
                        {props.isFetchingUserList ?
                            <Loader additional="small"/> :
                            userSecondaryListElements
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserList;