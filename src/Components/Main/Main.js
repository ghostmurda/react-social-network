import React from 'react'
import NavMenu from '../NavMenu/NavMenu'
import './Main.css';
import {Route, BrowserRouter, Redirect} from 'react-router-dom';
import UserListContainer from "../UserList/UserListContainer";
import ChatsContainer from "../Chats/ChatsContainer";
import ProfilePageContainer from "../ProfilePage/ProfilePageContainer";
import LoginPage from "../LoginPage/LoginPage";

function Main(props) {
    return (
        <BrowserRouter>
            <div className="Main">
                <NavMenu/>
                <div className="main__content">
                    <Route path="/"> <Redirect to="/react-social-network"/> </Route>
                    <Route exact path="/react-social-network" render={() => <LoginPage/>}/>
                    <Route path="/user/:userId" render={() => <ProfilePageContainer/>}/>
                    <Route exact path="/following" render={() => <UserListContainer/>}/>
                    <Route path="/dialogs" render={() => <ChatsContainer/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default Main;