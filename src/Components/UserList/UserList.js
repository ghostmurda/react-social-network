import React from 'react';
import './UserList.css';
import UserCard from './UserCard/UserCard';
import * as axios from 'axios';

class UserList extends React.Component{
    componentDidMount() {
        axios.get('https://test-social-network-api.herokuapp.com/api/users/following')
            .then(responce => {
                this.props.getUsers(responce.data);
            });

        axios.get('https://test-social-network-api.herokuapp.com/api/users/popular?skip=0&pageSize=5')
            .then(response => {
               this.props.getPopularUsers(response.data);
            });
    }

    render() {
        return (
            <div className="UserList">
                <div className="users-page">
                    <div className="users-page__list">
                        {this.props.userListData.map((item, i) => {
                            return <UserCard
                            key={i}
                            name={item.name}
                            posts={item.posts}
                            followers={item.followers}
                            following={item.following}
                            info={item.info}
                            />;
                        })}
                    </div>
                    <div className="users-page__secondary-list">
                        <div className="secondary-list__header">Popular</div>
                        <span>&nbsp;</span>
                        <div className="UserSmallCard">
                            {this.props.userSecondaryListData.map((item, i) => {
                                return <UserCard
                                    key={i}
                                    name={item.name}
                                    posts={item.posts}
                                    followers={item.followers}
                                    following={item.following}
                                    info={item.info}
                                />;
                            })}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default UserList;