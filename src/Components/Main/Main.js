import React from 'react'
import NavMenu from '../NavMenu/NavMenu'
import './Main.css';
import {Route, BrowserRouter, Redirect} from 'react-router-dom';
import ProfileContainer from "../Profile/ProfileContainer";
import DialogsContainer from "../Dialogs/DialogsContainer";
import UserListContainer from "../UserList/UserListContainer";

function Main(props) {
    return (
        <BrowserRouter>
            <div className="Main">
                <NavMenu/>
                <div className="main__content">
                    <Route path="/"> <Redirect to="/react-social-network"/> </Route>
                    <Route exact path="/react-social-network" render={() => <ProfileContainer/>}/>
                    <Route path="/user" render={() => <ProfileContainer/>}/>
                    <Route exact path="/following" render={() => <UserListContainer/>}/>
                    <Route path="/dialogs" render={() => <DialogsContainer/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default Main;