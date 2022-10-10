import { Route, Routes } from "react-router-dom";
import "./App.css";
// import SignUpForm from "./components/Form_Encrypt/SignUpForm";
import Navbar from "./components/Navbar/Navbar";
import ReactFormik from "./components/ReactFormik/ReactFormik";
import SignupFormik from "./components/SignUpFormFormik/SignupFormik";
// import SbiForm from "./components/SbiForm";
import AllUser from "./components/Userdetails/Userdetails";

function App() {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div>
        <Routes>
          {/* <Route path="/encryptform" element={<SignUpForm />}></Route> */}
          <Route path="/sbiform" element={<SbiForm />}></Route>
          
          <Route path="/alluser" element={<AllUser />}></Route>
          <Route path="/reactsbiform" element={<ReactFormik />}></Route>
          <Route path="/newform" element={<SignupFormik/>}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
