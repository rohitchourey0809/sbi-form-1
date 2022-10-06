import React, { useEffect, useRef } from "react";
import bcrypt from "bcryptjs";
import axios from "axios";

const SignUpForm = () => {
const emailInputRef = useRef()
const passwordInputRef = useRef()

  const SignUp = (e) => {
    e.preventDefault();
    const email = emailInputRef.current.value
    const password = passwordInputRef.current.value
     
    const hashedPassword = bcrypt.hashSync(password,10)
    console.log("HassPassword",hashedPassword)

    //yOU CAN CALL API HERE
    // const SbiRegdata = (payload) => {
    //     axios
    //       .post("http://localhost:8080/Sbiform", payload)
    //       .then((response) => {
    //         console.log("response", response.data);
    //       })
    //       .catch((error) => {
    //         return error;
    //       });
    //   };
    //   useEffect(()=>{
    //     SbiRegdata()
    //   },[SbiRegdata])
    window.localStorage.setItem('login',JSON.stringify({email,hashedPassword}))
  };

  const LoginForm = (e) => {
    e.preventDefault();
    const email = emailInputRef.current.value
    const password = passwordInputRef.current.value
const getHashedPassword = JSON.parse(window.localStorage.getItem('login')).hashedPassword
console.log("getHashedPassword",getHashedPassword)

//MatchPassword
bcrypt.compare(password,getHashedPassword,function(err,isMatch){
    if(err){
        throw err;
    }else if(!isMatch){
        console.log("Passoword doesn't match")
    }else{
        console.log("Paaword Matches")
    }
})
  };
  return (
    <div>
      <form>
        <input type="email" ref={emailInputRef} placeholder="Email" />
        <input type="password" ref={passwordInputRef} placeholder="Password" />
        <button type="submit" onClick={(e) => SignUp(e)}>
          Sign Up
        </button>
        <button type="submit" onClick={(e) => LoginForm(e)}>
          Login
        </button>
      </form>
    </div>
  );
};

export default SignUpForm;
