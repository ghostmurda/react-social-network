import React, {useState} from 'react';
import './UserList.css';
import UserCard from './UserCard/UserCard';
import Loader from "../Loader/Loader";

function UserList(props) {
    const [page, setPage] = useState(1);

    let usersListElements = props.followingListData.map((item, i) => <UserCard key={i} {...item}/>);
    let usersSecondaryListElements = props.usersListData.map((item, i) => <UserCard key={i} {...item}/>);

    let showMore = (skip, pageSize = 5) => {
        props.showMore(skip, pageSize);
        setPage(page + 1);
    }
    return (
        <div className="UserList">
            <div className="users-page">
                <div className="users-page__list">
                    {props.isFetchingFollowingList ? <Loader/> : usersListElements}
                </div>
                <div className="users-page__secondary-list">
                    <div className="secondary-list__header">Popular</div>
                    <span>&nbsp;</span>
                    <div className="UserSmallCard">
                        {props.isFetchingUsersList ?
                            <Loader additional="small"/>
                            :
                            <>
                                {usersSecondaryListElements}
                                <div className="users-page__secondary-list__btn-wrapper">
                                    <button className="btn" onClick={() => showMore(page)}>
                                        More
                                    </button>
                                </div>
                            </>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserList;