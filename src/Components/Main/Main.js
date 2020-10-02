import React from 'react'
import Following from '../Following/Following';
import NavMenu from '../NavMenu/NavMenu'
import Profile from '../Profile/Profile'
import './Main.css';
import { Route, BrowserRouter, Redirect } from 'react-router-dom';


function Main(props){
    let defaultProfile = {
        name: 'Daniel Simonov',
        followers: '0',
        posts: '1',
    };

    return (
        <BrowserRouter>
        <div className="Main">
            <NavMenu />
            <div className="main__content">
                <Route path="/">
                    <Redirect to="/home"/>
                </Route>
                <Route exact path="/home" component={() => <Profile obj={defaultProfile}/>}/>
                <Route path="/user" component={Profile}/>
                <Route path="/following" component={Following}/>
            </div>
        </div>
        </BrowserRouter>
    );
}

export default Main;