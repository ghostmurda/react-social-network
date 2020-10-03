import React from 'react';
import './NavMenu.css';
import {ReactComponent as HomeIcon} from '../../img/home-icon.svg';
import {ReactComponent as FriendsIcon} from '../../img/friends-icon.svg';
import {ReactComponent as PopularIcon} from '../../img/popular-icon.svg';
import {Link} from 'react-router-dom';

function NavMenu(){
    return (
        <div className="NavMenu">
            <ul>
                <Link to="/react-social-network"><li><HomeIcon /> &nbsp; Home</li></Link>
                <Link to="/following"><li><FriendsIcon /> &nbsp; Following</li></Link>
                <Link to="/popular"><li><PopularIcon /> &nbsp; Popular</li></Link>
            </ul>
        </div>
    );
}

export default NavMenu;
