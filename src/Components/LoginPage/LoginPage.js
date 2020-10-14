import React, {useEffect, useRef, useState} from "react";
import {useHistory} from 'react-router-dom';
import './LoginPage.css';
import {loginReq} from "../../api/api";

function LoginPage(props) {
    const [loginProcess, setLoginProcess] = useState(false);
    let history = useHistory();
    const loginRef = useRef();
    const passwordRef = useRef();
    let setLoginProcessFalse = () => setLoginProcess(false);

    let authFunc = () => {
        if (loginRef.current.value !== '' && passwordRef.current.value !== '') {
            setLoginProcess(true);
        }
    };

    useEffect(() => {
        if (loginProcess) {
            setLoginProcessFalse();
           loginReq(loginRef.current.value, passwordRef.current.value)
                .then(res => {
                    if (res !== 'failed'){
                        props.setAuth();
                        props.getId(res.userId);
                        props.getName(res.userName);
                        history.push(`/home/${res.userId}`);
                    }
                });
            loginRef.current.value = '';
            passwordRef.current.value = '';
        }
    });
    return (
        <div className="LoginPage">
            <div className="login-page__form">
                <input type="login" placeholder="Login" ref={loginRef}/>
                <input type="password" placeholder="Password" ref={passwordRef}/>
                <div className="from__btn-wrapper">
                    <button className="btn" onClick={authFunc}>Sign in</button>
                    <span>Forgot password?</span>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;