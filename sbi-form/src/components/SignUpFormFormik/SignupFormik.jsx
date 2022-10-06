import { Formik } from "formik";
import React from "react";
import ContactForm from "./ContactForm";
import * as Yup from "yup";
import axios from "axios";

const SignupFormik = () => {
    const SbiRegdata = (payload) => {
        axios
          .post("http://localhost:8080/SbiRegistform", payload)
          .then((response) => {
            console.log("responsepost", response.data);
          })
          .catch((error) => {
            return error;
          });
      };
  const ErrorSchema = Yup.object().shape({
    username: Yup.string()
      .required("Name is Required")
      .min(2, "too Short")
      .max(12, "Too Long"),
    age: Yup.number()
      .typeError("Age is required")
      .integer("must be an integer")
      .required("Required")
      .min(18, "You must be atleast 18 years")
      .max(60, "You must be atmost 60 years"),
    email: Yup.string().email("Invalid email").required("Required"),
    phone: Yup.string()
      .required("This field is Required")
      .matches(
        /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
        "Phone number is not valid"
      ).max(10).required("Required"),
  });
  return (
    <div className="container pt-5">
      <div className="row justify-content-sm-center pt-5">
        <div className="col-sm-6 shadow round pb-3">
          <Formik
            initialValues={{
              username: "",
              age: "",
              email: "",
              phone: "",
            }}
            onSubmit={(value,action) => {
              console.log("value", value);
              SbiRegdata(value);
              action.resetForm();
            }}
            validationSchema={ErrorSchema}
            component={ContactForm}
          />
        </div>
      </div>
    </div>
  );
};

export default SignupFormik;
