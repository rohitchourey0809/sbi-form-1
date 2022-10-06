import { Field, Form, Formik } from "formik";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import axios from "axios";
import "./BasicFormik.css";
import React, { useEffect, useState } from "react";
import { SignupSchema } from "./schemas";
import ReactPhone from "../ReactPhone/ReactPhone";

const initialValues = {
  name: "",
  email: "",
  mobile: "",
  termsAndConditions: false,
};

const ReactFormik = () => {
  // const [phone, setPhone] = useState()

 


  const SbiRegdata = (payload) => {
    axios
      .post("http://localhost:8080/Sbiform", payload)
      .then((response) => {
        console.log("response", response.data);
      })
      .catch((error) => {
        return error;
      });
  };
  // useEffect(()=>{
    // SbiRegdata()
  // },[SbiRegdata])

  // console.log("Formik", values);
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={SignupSchema}
      onSubmit={(values, action) => {
        console.log("clicked");
        console.log("formik property", values);
        SbiRegdata(values);
        action.resetForm();
      }}
    >
      {({
        values,
        handleSubmit,
        errors,
        touched,
        handleChange,
        handleBlur,
      }) => (
        <div className="sbidiv">
          <h2>Sbi form</h2>
          <Form onSubmit={handleSubmit}>
            <div className="input-block">
              <label htmlFor="name" className="input-label">
                Name
              </label>
              <input
                type="text"
                autoComplete="off"
                name="name"
                id="name"
                placeholder="name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <p className="formerror">
                {" "}
                {errors.name && touched.name ? <p>{errors.name}</p> : null}
              </p>
            </div>
            <div className="input-block">
              <label htmlFor="email" className="input-label">
                Email
              </label>
              <input
                type="email"
                autoComplete="off"
                name="email"
                id="email"
                placeholder="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <p>
                {errors.email && touched.email ? (
                  <p className="form-error">{errors.email}</p>
                ) : null}
              </p>
            </div>
            <div className="input-block">
              <label htmlFor="mobile" className="input-label">
                Mobile
              </label>
              <input
                type="tel"
                maxLength={10}
                autoComplete="off"
                name="mobile"
                id="mobile"
                placeholder="Mobile"
                value={values.mobile}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <p>
                {" "}
                {errors.mobile && touched.mobile ? (
                  <p className="form-error">{errors.mobile}</p>
                ) : null}
              </p>
            </div>
            {/* <div>
              <ReactPhone
                type="tel"
                maxLength={10}
                autoComplete="off"
                name="mobile"
                id="mobile"
                placeholder="Mobile"
                value={values.mobile}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div> */}
            <p>
              {" "}
              {errors.mobile && touched.mobile ? (
                <p className="form-error">{errors.mobile}</p>
              ) : null}
            </p>
            <div>
              <label>
                <Field type="checkbox" name="termsAndConditions" />
                Terms and conditions
              </label>
              {errors.termsAndConditions && <p>{errors.termsAndConditions}</p>}
            </div>

            <div className="modal-buttons">
              {/* <a href="#" className=''>Want To Regsiter using Gmail</a> */}
              <button className="input-button" type="submit" value="submit">
                Get A Quick Call
              </button>
            </div>
          </Form>
        </div>
      )}
    </Formik>
  );
};

export default ReactFormik;
