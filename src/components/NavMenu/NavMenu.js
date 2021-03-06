import React from 'react';
import './NavMenu.css';
import {ReactComponent as HomeIcon} from '../../img/home-icon.svg';
import {ReactComponent as FriendsIcon} from '../../img/friends-icon.svg';
import {ReactComponent as DialogsIcon} from '../../img/dialogs-icon.svg';
import {NavLink} from 'react-router-dom';

function NavMenu(props) {
    return (
        <>
            {props.auth ?
                <div className="NavMenu">
                    <ul>
                        <NavLink to={`/home/${props.userId}`} activeClassName="link-selected">
                            <li><HomeIcon/> &nbsp; Home</li>
                        </NavLink>
                        <NavLink to="/dialogs" activeClassName="link-selected">
                            <li><DialogsIcon/> &nbsp; Dialogs</li>
                        </NavLink>
                        <NavLink to="/following" activeClassName="link-selected">
                            <li><FriendsIcon/> &nbsp; Following</li>
                        </NavLink>
                    </ul>
                </div> :
                null
            }
        </>
    );
}

export default NavMenu;
