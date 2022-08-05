import React from "react";
import "antd/dist/antd.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Login from "./component/Auth/Login";
import Signup from "./component/Auth/Signup";
import ForgotPassword from "./component/Auth/ForgotPassword";
import OtpSent from "./component/Auth/OtpSent";
import CompanyDetails from "./component/Auth/form/CompanyDetails";
import ForgotOtp from "./component/Auth/ForgotOtp";
import CreatePassword from "./component/Auth/CreatePassword";
import Home from "./component/layout/Home";
import Demo from "./component/Demo";
import "../src/component/form.scss";
const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/Otp-sent" element={<OtpSent />} />
      <Route path="/home" element={<Home />} />
      <Route path="/forgot-otp" element={<ForgotOtp />} />
      <Route path="/create-password" element={<CreatePassword />} />
      <Route path="/demo" element={<Demo />} />
      <Route path="/Company-Details" element={<CompanyDetails />} />
      <Route path="*" element={<Login />} />
    </Routes>
  );
};

export default App;
