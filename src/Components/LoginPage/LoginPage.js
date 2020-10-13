import React, {useEffect, useRef, useState} from "react";
import { useHistory } from 'react-router-dom';
import * as axios from 'axios';

function LoginPage(props){
    const [loginProcess, setLoginProcess] = useState(false);
    let history = useHistory();
    const loginRef = useRef();
    const passwordRef = useRef();

    let authFunc = () => {
        if (loginRef.current.value !== '' && passwordRef.current.value !== ''){
            setLoginProcess(true);
        }
    };

    useEffect(() => {
        if (loginProcess) {
            const url = 'https://test-social-network-api.herokuapp.com';
            axios.get(`${url}/login?login=${loginRef.current.value}&password=${passwordRef.current.value}`)
                .then(resp => {
                    props.setAuth();
                    props.getId(resp.data);
                    history.push(`/user/${resp.data}`);
                });
        }
    });
    return (
        <div className="LoginPage">
            <input type="login" placeholder="Login" ref={loginRef}/>
            <input type="password" placeholder="Password" ref={passwordRef}/>
            <button onClick={authFunc}>Login</button>
        </div>
    );
}

export default LoginPage;