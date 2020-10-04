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
                            userData={props.userObj}
                            userPosts={props.profileData}
                        />}
                    />
                    <Route path="/user" component={Profile}/>
                    <Route exact path="/following" component={() =>
                        <UserList
                            userListData={props.usersArr}
                            userSecondaryListData={props.popularUsersArr}
                            secondaryListType="Popular"
                            profilePosts={props.profileData}
                        />
                    }/>
                    <Route exact path="/popular" component={() =>
                        <UserList
                            userListData={props.popularUsersArr}
                            userSecondaryListData={props.usersArr}
                            secondaryListType="Following"
                            profilePosts={props.profileData}
                        />
                    }/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default Main;