import React from 'react';
import { ReactComponent as Logo } from '../../img/logo.svg';
import { ReactComponent as Search } from '../../img/search.svg';
import './Header.css';

function Header(){
    return (
        <div className="Header">
            <div className="header">
            <div className="header__logo">
                <Logo />
            </div>
            <div className="header__search">
                <Search />
                <input type="text" placeholder="Search" />
            </div>
            <div className="header__user">
                <img src={`https://api.adorable.io/avatars/64/${'Daniel Simonov'}@adorable.png`}/>
            </div>
            </div>
        </div>
    );
}

export default Header;