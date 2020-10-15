import React, {useEffect, useRef, useState} from "react";
import {useHistory} from 'react-router-dom';
import './LoginPage.css';
import Loader from "../Loader/Loader";

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
            props.onLoginProcess(loginRef.current.value, passwordRef.current.value);
            loginRef.current.value = '';
            passwordRef.current.value = '';
        }
        if (props.authData.userId !== null){
            history.push(`/home/${props.authData.userId}`);
        }
    });

    return (
        <>
            {props.authData.isFetching ? <Loader/> :
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
            }
        </>
    );
}

export default LoginPage;