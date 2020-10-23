import React from "react";
import {Form, Field} from 'react-final-form';

function InputForm(props){
    return (
        <Form onSubmit={props.onSubmit}
              validate={values => {
                  const errors = {};
                  if (!values[props.fieldName]){
                      errors[props.fieldName] = 'Required';
                  }
                  return errors;
              }}
              render={({handleSubmit, form, submitting, pristine, values}) => (
                  <form className={props.formClassName} onSubmit={handleSubmit}>
                      <Field name={props.fieldName}>
                          {({input}) => (
                              <input {...input}
                                     placeholder={props.inputPlaceholder}
                                     className={props.inputClassName}
                              />
                          )}
                      </Field>
                      <button className="btn" type="submit" disabled={submitting}>
                          {props.btnName}
                      </button>
                  </form>
              )}
        />
    );
}

export default InputForm;