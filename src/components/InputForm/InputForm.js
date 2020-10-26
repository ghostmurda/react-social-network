import React from "react";
import {Form, Field} from 'react-final-form';
import Button from "../Button/Button";

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
                      <Button type={"submit"} disabled={submitting} btnName={props.btnName}/>
                  </form>
              )}
        />
    );
}

export default InputForm;