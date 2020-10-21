import React, {useEffect} from "react";
import {Form, Field} from 'react-final-form';
import {useHistory} from 'react-router-dom';
import './LoginPage.css';
import Loader from "../Loader/Loader";

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
                    <div className="login-page__description">
                        <span className="login-page__description__title">
                            react-social-network
                        </span>
                        <span className="login-page__description__body">
                            <ul>
                                <li>This is simple <a href="https://github.com/ghostmurda/react-social-network">
                                    prototype of social network</a> single-page application made using React + Redux
                                </li>
                                <li>
                                    react-social-network is using his own <a href="https://github.com/ghostmurda/server-rest-api">
                                    RESTful API service</a> made using Express + Lowdb
                                </li>
                                <li>
                                    Right now there is no registration feature
                                </li>
                                <li>
                                    To sign in use login <strong>admin</strong> and password <strong>admin</strong><br/>
                                    or <i>any number from 2 to 11</i> for login and <strong>admin</strong> for password
                                </li>
                            </ul>
                        </span>
                    </div>
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