import React from 'react';
import {ReactComponent as Logo} from '../../img/logo.svg';
import {ReactComponent as Search} from '../../img/search.svg';
import './Header.css';

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
                    <img className="header__user"
                         src={`https://avatars.dicebear.com/api/avataaars/${props.name}.svg`}
                         alt="Avatar"/>
                    : <div className="header__user"> </div>}
            </div>
        </div>
    );
}

export default Header;