import React from "react";
import {Form, Field} from "react-final-form";

function LoginPageForm(props){
    return (
        <Form onSubmit={props.onSubmit}
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
    );
}

export default LoginPageForm;