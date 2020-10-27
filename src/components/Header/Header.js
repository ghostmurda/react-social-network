import React from 'react';
import {ReactComponent as Logo} from '../../img/react.svg';
import {ReactComponent as Search} from '../../img/search.svg';
import './Header.css';
import Avatar from "../Avatar/Avatar";

function Header(props) {
    return (
        <div className="Header">
            <div className="header">
                <div className="header__logo">
                    <Logo/>
                </div>
                <div className="header__search">
                    <Search/>
                    <input type="text" placeholder="Search"/>
                </div>
                {props.name ?
                    <Avatar avatarClassName={"header__user"} userName={props.name}/>
                    : <div className="header__user"> </div>
                }
            </div>
        </div>
    );
}

export default Header;