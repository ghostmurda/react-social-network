import React, {Suspense} from "react";
import {BrowserRouter, Redirect, Route} from "react-router-dom";
import "./App.css";
import HeaderContainer from "./containers/HeaderContainer";
import LoginPageContainer from "./containers/LoginPageContainer";
import NavMenuContainer from "./containers/NavMenuContainer";
import Loader from "./components/Loader/Loader";
const UserListContainer = React.lazy(() => import("./containers/UserListContainer"));
const ChatsContainer = React.lazy(() => import("./containers/ChatsContainer"));
const ProfilePageContainer = React.lazy(() => import("./containers/ProfilePageContainer"));

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
                        <Suspense fallback={<Loader/>}>
                            <Route path="/user/:userId" render={() => <ProfilePageContainer/>}/>
                        </Suspense>
                        <Suspense fallback={<Loader/>}>
                            <Route path="/home/:userId" render={() => <ProfilePageContainer/>}/>
                        </Suspense>
                        <Suspense fallback={<Loader/>}>
                            <Route exact path="/following" render={() => <UserListContainer/>}/>
                        </Suspense>
                        <Suspense fallback={<Loader/>}>
                            <Route path="/dialogs" render={() => <ChatsContainer/>}/>
                        </Suspense>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
