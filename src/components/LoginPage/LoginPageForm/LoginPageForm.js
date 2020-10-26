import React from "react";
import {Form, Field} from "react-final-form";
import Button from "../../Button/Button";

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
                          <Button type={"submit"} disabled={submitting} btnName={"Sign in"}/>
                          <span>Forgot password?</span>
                      </div>
                  </form>
              )}
        />
    );
}

export default LoginPageForm;