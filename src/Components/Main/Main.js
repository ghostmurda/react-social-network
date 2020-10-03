import React from 'react'
import Following from '../Following/Following';
import NavMenu from '../NavMenu/NavMenu'
import Profile from '../Profile/Profile'
import './Main.css';
import { Route, BrowserRouter, Redirect } from 'react-router-dom';


function Main(props){
    return (
        <BrowserRouter>
        <div className="Main">
            <NavMenu />
            <div className="main__content">
                <Route path="/">
                    <Redirect to="/react-social-network"/>
                </Route>
                <Route exact path="/react-social-network" component={() => <Profile obj={props.obj.defaultUser}/>}/>
                <Route path="/user" component={Profile}/>
                <Route path="/following" component={Following}/>
            </div>
        </div>
        </BrowserRouter>
    );
}

export default Main;