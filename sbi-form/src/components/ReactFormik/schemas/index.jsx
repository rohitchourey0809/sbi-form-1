import * as Yup from "yup";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
export const SignupSchema = Yup.object().shape({
  name: Yup.string().min(2).max(30).required("Please enter your name"),
  email: Yup.string().email().required("Please enter your Email"),
  mobile: Yup.string()
    .matches(phoneRegExp, "Phone number is not valid")
    .min(10)
    .required("A phone number is required"),
  termsAndConditions: Yup.bool().oneOf([true], `Accept Term And Condition`),
});
