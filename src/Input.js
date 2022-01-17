import React from "react";
// import {ErrorMessage} from 'formik'
// import styles from './input.module.css'

import 'bootstrap/dist/css/bootstrap.min.css'
function Input({ label, ...props }) {
  return (
    <div className="mb-2 text-primary ">
      <label htmlFor={props.name}>{props.name}:</label>
      <input
        onBlur = {props.onBlur}
        type="text"
        {...props}
        autoComplete="off"
        // className={`form-control shadow-none ${meta.touched && meta.error && 'is-invalid'} w-25 `}
      />
      <span className='text-info'>{props.touched[props.name] && props.error[props.name]}</span>
    </div>
  );
}

export default Input;
