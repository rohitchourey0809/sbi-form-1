import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import "./SbiForm.css";

const SbiForm = () => {
  const [formdata, SetFormData] = useState({
    username: "",
    email: "",
    mobile: "",
  });
  const [formError, SetFormError] = useState({});
  const [isSubmit, setSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);

    SetFormData({ ...formdata, [name]: value });
    console.log("form", formdata);
  };

  useEffect(() => {
    console.log(formError);
    if (Object.keys(formError).length === 0 && isSubmit) {
      console.log(formdata);
    }
  }, [isSubmit,formError,formdata]);

  const handleSubmit = (e) => {
    e.preventDefault();
    SetFormError(validate(formdata));
    setSubmit(true);

    const payload = {
    Username : formdata.username,
    Email: formdata.email,
    Mobile: formdata.mobile,
    }

    axios.post("http://localhost:8080/Sbiform",payload).then((response)=>{
        console.log("response",response.data)
    }).catch((error)=>{
        return error
    })




  };

  const validate = (values) => {
    console.log("values", values);
    const errors = {};
    // const regex = "/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i";

    if (!values.username) {
      errors.username = "Username is required";
    }
    if (!values.email) {
      errors.email = "Email is required";
    
    }
    if (!values.mobile) {
      errors.mobile = "Mobile is required";
    }
    return errors;
  };
  return (
    <>
      <form onClick={handleSubmit}>
        <label>First Name</label>
        <input
          type="text"
          id="fname"
          name="username"
          placeholder="Your name.."
          value={formdata.username}
          onChange={handleChange}
        />
        <p>{formError.username}</p>

        <label>Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          value={formdata.email}
          onChange={handleChange}
        />
        <p>{formError.email}</p>

        <label>Mobile</label>
        <input
          id="mobile"
          type="tel"
          size="20"
          minlength="10"
          maxlength="10"
          name="mobile"
          placeholder="Mobile No.."
          value={formdata.mobile}
          onChange={handleChange}
        />
        <p>{formError.mobile}</p>

        <input type="submit" value="Submit" />
      </form>
    </>
  );
};

export default SbiForm;
