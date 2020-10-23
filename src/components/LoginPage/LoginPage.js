import React, {useEffect} from "react";
import {Form, Field} from 'react-final-form';
import {useHistory} from 'react-router-dom';
import './LoginPage.css';
import Loader from "../Loader/Loader";
import LoginPageDescription from "./LoginPageDescription/LoginPageDescription";

function LoginPage(props) {
    let history = useHistory();

    useEffect(() => {
        if (props.userId !== null) {
            history.push(`/home/${props.userId}`);
        }
    });

    const onSubmit = (values) => {
        props.onLoginProcess(values.username, values.password);
        values.username = '';
        values.password = '';
    }

    return (
        <>
            {props.isFetching ? <Loader additional={"login-page"}/> :
                <div className="LoginPage">
                    <LoginPageDescription/>
                    <Form onSubmit={onSubmit}
                          validate={values => {
                              const errors = {}
                              if (!values.username) {
                                  errors.username = 'Required'
                              }
                              if (!values.password) {
                                  errors.password = 'Required'
                              }
                              return errors
                          }}
                          render={({handleSubmit, form, submitting, pristine, values}) => (
                              <form className="login-page__form" onSubmit={handleSubmit}>
                                  <Field name="username">
                                      {({input, meta}) => (
                                          <div>
                                              <input className="form__input" {...input} type="login"
                                                     placeholder="Login"/>
                                          </div>
                                      )}
                                  </Field>
                                  <Field name="password">
                                      {({input, meta}) => (
                                          <div>
                                              <input className="form__input" {...input} type="password"
                                                     placeholder="Password"/>
                                          </div>
                                      )}
                                  </Field>
                                  <div className="form__btn-wrapper">
                                      <button className="btn" type="submit" disabled={submitting}>
                                          Sign in
                                      </button>
                                      <span>Forgot password?</span>
                                  </div>
                              </form>
                          )}
                    />
                </div>
            }
        </>
    );
}

export default LoginPage;