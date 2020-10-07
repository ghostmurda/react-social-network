import React from 'react'
import UserList from '../UserList/UserList';
import NavMenu from '../NavMenu/NavMenu'
import Profile from '../Profile/Profile'
import './Main.css';
import {Route, BrowserRouter, Redirect} from 'react-router-dom';
import Dialogs from "../Dialogs/Dialogs";

function Main(props) {
    return (
        <BrowserRouter>
            <div className="Main">
                <NavMenu/>
                <div className="main__content">
                    <Route path="/">
                        <Redirect to="/react-social-network"/>
                    </Route>
                    <Route exact path="/react-social-network" render={() =>
                        <Profile
                            userData={props.user.userInfo}
                            userPosts={props.profilePosts}
                            dispatch={props.dispatch}
                        />}
                    />
                    <Route path="/user" render={() =>
                            <Profile
                                dispatch={props.dispatch}
                            />}
                    />
                    <Route exact path="/following" render={() =>
                        <UserList
                            userListData={props.user.followingList}
                            userSecondaryListData={props.popularUsers}
                            secondaryListType="Popular"
                            profilePosts={props.profilePosts}
                        />
                    }/>
                    <Route exact path="/popular" render={() =>
                        <UserList
                            userListData={props.popularUsers}
                            userSecondaryListData={props.user.followingList}
                            secondaryListType="Following"
                            profilePosts={props.profilePosts}
                        />
                    }/>
                    <Route path="/dialogs" render={() =>
                        <Dialogs
                            userListData={props.user.followingList}
                            chats={props.chats}
                            dispatch={props.dispatch}
                        />
                    } />
                </div>
            </div>
        </BrowserRouter>
    );
}

export default Main;