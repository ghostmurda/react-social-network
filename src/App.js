import React from "react";
import "./App.css";
import HeaderContainer from "./containers/HeaderContainer";
import {BrowserRouter, Redirect, Route} from "react-router-dom";
import ProfilePageContainer from "./containers/ProfilePageContainer";
import UserListContainer from "./containers/UserListContainer";
import ChatsContainer from "./containers/ChatsContainer";
import LoginPageContainer from "./containers/LoginPageContainer";
import NavMenuContainer from "./containers/NavMenuContainer";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <HeaderContainer/>
                <div className="app-main">
                    <NavMenuContainer/>
                    <div className="app-main__content">
                        <Route path="/"> <Redirect to="/react-social-network"/> </Route>
                        <Route exact path="/react-social-network" render={() => <LoginPageContainer/>}/>
                        <Route path="/user/:userId" render={() => <ProfilePageContainer/>}/>
                        <Route path="/home/:userId" render={() => <ProfilePageContainer/>}/>
                        <Route exact path="/following" render={() => <UserListContainer/>}/>
                        <Route path="/dialogs" render={() => <ChatsContainer/>}/>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
