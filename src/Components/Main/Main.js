import React from 'react'
import UserList from '../UserList/UserList';
import NavMenu from '../NavMenu/NavMenu'
import Profile from '../Profile/Profile'
import './Main.css';
import {Route, BrowserRouter, Redirect} from 'react-router-dom';

function Main(props) {
    return (
        <BrowserRouter>
            <div className="Main">
                <NavMenu/>
                <div className="main__content">
                    <Route path="/">
                        <Redirect to="/react-social-network"/>
                    </Route>
                    <Route exact path="/react-social-network" component={() =>
                        <Profile
                            userData={props.user.userInfo}
                            userPosts={props.profilePosts}
                            addPost={props.addPost}
                            sortPosts={props.sortPosts}
                        />}
                    />
                    <Route path="/user" component={() =>
                            <Profile
                                addPost={props.addPost}
                                sortPosts={props.sortPosts}
                            />}
                    />
                    <Route exact path="/following" component={() =>
                        <UserList
                            userListData={props.user.followingList}
                            userSecondaryListData={props.popularUsers}
                            secondaryListType="Popular"
                            profilePosts={props.profilePosts}
                        />
                    }/>
                    <Route exact path="/popular" component={() =>
                        <UserList
                            userListData={props.popularUsers}
                            userSecondaryListData={props.user.followingList}
                            secondaryListType="Following"
                            profilePosts={props.profilePosts}
                        />
                    }/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default Main;