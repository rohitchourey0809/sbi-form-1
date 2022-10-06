import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import "./SbiForm.css";
import { Checkbox } from "./CheckBox";

const SbiForm = () => {
  const [formdata, SetFormData] = useState({
    username: "",
    email: "",
    mobile: "",
  });
  const [formError, SetFormError] = useState({
    username: "Username is Required",
    email: "Email is Required",
    mobile: "Mobile is Required",
  });
  const [focused, setFocused] = useState(false);
  const [isSubmit, setSubmit] = useState(false);
  const [checked, setChecked] = useState(false);
  // const [UsernameError, setUsername] = useState("Username id required");
  const [EmailError, setEmail] = useState("Email is required");
  const [MobileError, setMobile] = useState("Mobile is required");
  const [active, setActive] = useState(false);

 

  const handleChange = (e) => {
    // setChecked(!checked);
    const { id, value } = e.target;
    console.log(id, value);

    SetFormData({ ...formdata, [id]: value });

    console.log("form", formdata);
  };
  const handleFocus = () =>{
    setFocused(true)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("clicked");
    if (
      formdata.username == "" &&
      formdata.email == "" &&
      formdata.mobile == "" &&
      checked == false
    ) {
      setActive(false);
      alert("Please fill all the details");
    } else if (formdata.username == "") {
      setActive(false);
      alert("Please Enter Username");
    } else if (formdata.email == "") {
      setActive(false);
      alert("Please Enter Email");
    } else if (formdata.mobile == "") {
      setActive(false);
      alert("Please Enter Mobile");
    } else if (checked === false) {
      setActive(false);
      alert("Please Check Term And Condition");
    } else {
      console.log("Actve", active);
      setActive(true);

      const payload = {
        Username: formdata.username,
        Email: formdata.email,
        Mobile: formdata.mobile,
      };

      axios
        .post("http://localhost:8080/Sbiform", payload)
        .then((response) => {
          console.log("response", response.data);
        })
        .catch((error) => {
          return error;
        });
    }

   
  };

  const handleCheck = () => {
    setChecked(!checked);
    
  };
  return (
    <>
      <div className="sbidiv">
        <form onSubmit={handleSubmit}>
          <label>First Name</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Your name.."
            value={formdata.username}
            onChange={handleChange}
            onBlur={handleFocus}
            focused={focused.toString()}
            required={true}
          />
          <span>Username is required</span>

          <label>Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            value={formdata.email}
            onChange={handleChange}
            focused={focused.toString()}
            required={true}
          />
         <span >Email is required</span>

          <label>Mobile</label>
          <input
            id="mobile"
            type="tel"
            size="20"
            minLength="10"
            maxLength="10"
            name="mobile"
            placeholder="Mobile No.."
            value={formdata.mobile}
            onChange={handleChange}
            focused={focused.toString()}
            required={true}
          />
           <span >Mobile Number is required</span>
          <Checkbox
            label="I agree to the Terms & Condition"
            value={checked}
            onChange={handleCheck}
            focused={focused.toString()}
            required={true}
          />
          <input
            type="submit"
            value="Submit"
            disabled={active == true}
            id={active ? "ButtonActive" : "ButtonNonActivate"}
          />
        </form>
      </div>
    </>
  );
};

export default SbiForm;
