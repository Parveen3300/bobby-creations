import React, { useState } from "react";
import {
  Button,
  Image,
  Form,
  Card,
  Typography,
  Alert,
  InputNumber,
} from "antd";
import { signupOpt } from "../services/masterData";
import { Header } from "antd/lib/layout/layout";
import { useNavigate } from "react-router-dom";
const { Title } = Typography;
const OtpSent = () => {
  const [error, setError] = useState(false);
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const onFinish = (values) => {
    console.log("values", values);
    // form.getFieldValue(["opt1"]);
    var token = localStorage.getItem("userToken");
    const header = `Authorization: token ${token}`;
    const otpdata = {
      validate_otp: values.opt1,
      country_short_name: "IN",
      country_long_name: "India",
      location_timezone: "Asia/Kolkata",
    };
    signupOpt(otpdata)
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          console.log(response.data);
          navigate("/home");
        }
      })
      .catch((err) => {
        setError(true);
      });
  };

  return (
    <div className="otp-sent forgot-password">
      <Card className="position-absolute top-50 start-50 translate-middle w-50 m-auto px-md-5 py-4 shadow otp-sent">
        <div className="text-center">
          <Image
            src="otpverify.png"
            preview={false}
            className="my-4"
            width={80}
          />
          <Title level={4} className="mb-2">
            Verify Email
          </Title>
          <p>Enter OTP</p>
        </div>
        {error && (
          <Alert
            className="mb-2 px-3"
            description={"Incorrect otp."}
            type="error"
            showIcon
          />
        )}
        <Form name="basic" form={form} onFinish={onFinish}>
          <Form.Item name="opt1">
            <InputNumber
              placeholder="Enter OTP"
              className="w-100 mt-3"
              type="text"
            />
          </Form.Item>
          <Button type="primary" htmlType="submit" className="w-100 mt-1">
            Verify
          </Button>
        </Form>
      </Card>
    </div>
  );
};

export default OtpSent;
