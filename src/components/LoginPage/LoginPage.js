import React, {useEffect} from "react";
import {useHistory} from 'react-router-dom';
import './LoginPage.css';
import Loader from "../Loader/Loader";
import LoginPageDescription from "./LoginPageDescription/LoginPageDescription";
import LoginPageForm from "./LoginPageForm/LoginPageForm";

function LoginPage(props) {
    let history = useHistory();

    useEffect(() => {
        if (props.userId !== null) {
            history.push(`/home/${props.userId}`);
        }
    });

    const onSubmit = async (values) => {
        try{
            await props.onLoginProcess(values.username, values.password);
            values.username = '';
            values.password = '';
        }catch (err){
            console.log(err);
        }
    }

    return (
        <>
            {props.isFetching ? <Loader additional={"login-page"}/> :
                <div className="LoginPage">
                    <LoginPageDescription/>
                    <LoginPageForm onSubmit={onSubmit}/>
                </div>
            }
        </>
    );
}

export default LoginPage;