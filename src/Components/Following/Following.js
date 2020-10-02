import React from 'react';
import './Following.css';
import User from './User/User';
import UserMini from './UserMini/UserMini'


function Following(){
    return (
        <div className="Following">
            <div className="following">
                <div className="following__list">
                    <User name="Pavel Durov" posts="3" followers="4"/>
                    <User name="Jon Snow" posts="26" followers="37"/>
                    <User name="Test User" posts="327" followers="1"/>
                    <User name="Dana West" posts="381" followers="99"/>
                    <User name="Roland Worthington" posts="0" followers="0"/>
                </div>
                <div className="following__possible">
                    <span>Popular users</span>
                    <UserMini name="Jon Snow" posts="26" followers="37"/>
                    <UserMini name="Dana West" posts="381" followers="99"/>
                    <UserMini name="Test User" posts="327" followers="1"/>
                </div>
            </div>
        </div>
    );
}

export default Following;