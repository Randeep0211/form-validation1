import React from "react";
import { useFormik } from "formik";
import Input from "./Input";
import * as Yup from "yup";
import axios from "axios";
import Snackbar from "node-snackbar";
import { useNavigate } from "react-router-dom";
// import styles from "./App.css"

const initialState = {
  Name: "",
  Email: "",
  Password: "",
};

const api = "https://reqres.in/api/login";

function Signup(props) {

  const navigate = useNavigate()
  const handleSubmit = async (values, helper) => {
    helper.setSubmitting(true);
    await axios.post(api, {
      email: values.Email,
      password: values.Password,
    }).then(function(response){

      console.log(response);
      localStorage.setItem('token' , response.data.token)
      Snackbar.show({text: response.data.token , pos:'top-center'})
      navigate('/login')
    }).catch(function(error){
      return error
    })
  };

  const validate = Yup.object({
    Name: Yup.string()
      .max(32, "characters must be less than 32")
      .required("Required"),

    Email: Yup.string()
      .email(20, "characters must be less than 20")
      .required("Required"),

    Password: Yup.string()
      .min(8, "characters must be atleast than 8")
      .required("Required"),
  });
  const formik = useFormik({
    initialValues: initialState,
    validationSchema: validate,
    onSubmit: handleSubmit,
  });

  return (
    <div>
      <div>
        <form onSubmit={formik.handleSubmit}>
          <div className="justify-content-center">
            <Input
              id="name"
              name="Name"
              type="text"
              value={formik.values.Name}
              onChange={formik.handleChange}
              error={formik.errors}
              touched = {formik.touched}
              onBlur = {formik.handleBlur}
            ></Input>
            <Input
              name="Email"
              id="email"
              email="Email"
              type="email"
              value={formik.values.Email}
              onChange={formik.handleChange}
              error={formik.errors}
              touched = {formik.touched}
              onBlur = {formik.handleBlur}
            ></Input>
            <Input
              name="Password"
              id="password"
              password="Password"
              type="password"
              value={formik.values.Password}
              onChange={formik.handleChange}
              error={formik.errors}
              touched = {formik.touched}
              onBlur = {formik.handleBlur}
            ></Input>
          </div>
          <button className="btn btn-dark mt-3" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
