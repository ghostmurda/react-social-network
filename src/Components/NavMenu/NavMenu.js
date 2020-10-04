import React from 'react';
import './NavMenu.css';
import {ReactComponent as HomeIcon} from '../../img/home-icon.svg';
import {ReactComponent as FriendsIcon} from '../../img/friends-icon.svg';
import {ReactComponent as PopularIcon} from '../../img/popular-icon.svg';
import {NavLink} from 'react-router-dom';

function NavMenu(){
    return (
        <div className="NavMenu">
            <ul>
                <NavLink to="/react-social-network" activeClassName="link-selected"><li><HomeIcon /> &nbsp; Home</li></NavLink>
                <NavLink to="/following" activeClassName="link-selected"><li><FriendsIcon /> &nbsp; Following</li></NavLink>
                <NavLink to="/popular" activeClassName="link-selected"><li><PopularIcon /> &nbsp; Popular</li></NavLink>
            </ul>
        </div>
    );
}

export default NavMenu;
