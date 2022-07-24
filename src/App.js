import React from "react";
import "antd/dist/antd.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Login from "./component/Login";
import Signup from "./component/Signup";
import ForgotPassword from "./component/ForgotPassword";
import OtpSent from "./component/OtpSent";
import CompanyDetails from "./component/form/CompanyDetails";
import Home from "./component/Home";
import "../src/component/form.scss";
const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/Otp-sent" element={<OtpSent />} />
      <Route path="/home" element={<Home />} />
      <Route path="/Company-Details" element={<CompanyDetails />} />
      <Route path="*" element={<Login />} />
    </Routes>
  );
};

export default App;
