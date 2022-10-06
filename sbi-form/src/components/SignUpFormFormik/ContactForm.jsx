import { ErrorMessage, Field, Form } from "formik";
import React from "react";

const ContactForm = ({errors,touched,isValid,dirty}) => {
  return (
    <>
      <Form>

          <div className="form-group">
            {" "}
            <label className="col-form-label">UserName</label>
            <Field name="username" className={touched.username ? `form-control ${errors.username ? "invalid":"valid"} ` : `form-control`} type="text" />
           {touched.username && errors.name &&  <small className="text-danger">{errors.username}</small>}
          </div>

          
          <div className="form-group">
            {" "}
            <label className="col-form-label">Age</label>
            <Field name="age" className={touched.age ? `form-control ${errors.age ? "invalid":"valid"} ` : `form-control`} type="text" />
           {touched.age && errors.age &&  <small className="text-danger">{errors.age}</small>}
          </div>
   

          <div className="form-group">
            {" "}
            <label className="col-form-label">Email</label>
            <Field name="email" className={touched.email ? `form-control ${errors.email ? "invalid":"valid"} ` : `form-control`} type="text" />
           {touched.email && errors.email &&  <small className="text-danger">{errors.email}</small>}
          </div>
          {/* <button className="btn btn-primary my-3" type="submit">Submit</button> */}

          <div className="form-group">
            {" "}
            <label className="col-form-label">Phone</label>
            <Field name="phone" className={touched.phone ? `form-control ${errors.phone ? "invalid":"valid"} ` : `form-control`} type="text" />
           {touched.phone && errors.phone &&  <small className="text-danger">{errors.phone}</small>}
          </div>
          <button className="btn btn-primary my-3" type="submit" disabled={!isValid || !dirty}>Submit</button>
        
      </Form>
    </>
  );
};

export default ContactForm;
