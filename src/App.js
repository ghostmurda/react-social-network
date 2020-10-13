import React from "react";
import "./App.css";
import HeaderContainer from "./Components/Header/HeaderContainer";
import {BrowserRouter, Redirect, Route} from "react-router-dom";
//import NavMenu from "./Components/NavMenu/NavMenu";
import ProfilePageContainer from "./Components/ProfilePage/ProfilePageContainer";
import UserListContainer from "./Components/UserList/UserListContainer";
import ChatsContainer from "./Components/Chats/ChatsContainer";
import LoginPageContainer from "./Components/LoginPage/LoginPageContainer";
import NavMenuContainer from "./Components/NavMenu/NavMenuContainer";

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
                        <Route exact path="/following" render={() => <UserListContainer/>}/>
                        <Route path="/dialogs" render={() => <ChatsContainer/>}/>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
