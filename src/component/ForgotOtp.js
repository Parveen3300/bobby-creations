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
import { otpVerify } from "../services/masterData";
const { Title } = Typography;
const forgotOtp = () => {
  // const [form] = Form.useForm()
  //   const [error, setError] = useState(false);
  const onFinish = (values) => {
    var token = localStorage.getItem("userToken");
    const header = `Authorization: token ${token}`;
    const forgotverify = {
      validate_otp: values.opt1,
      email_id: values.email,
      mobile_with_isd: '91',
      country_short_name: 'IN',
      country_long_name: 'India',
      location_timezone: 'Asia/Kolkata',
    }
    otpVerify(forgotverify)
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          console.log(response.data);
          // navigate("/home");
        }
      })
      .catch((err) => {
        // setError(true);
        console.log('err', err)
      });
  }
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
        {/* {error && (
          <Alert
            className="mb-2 px-3"
            description={"Incorrect otp."}
            type="error"
            showIcon
          />
        )} */}
        <Form name="basic" onFinish={onFinish}>
          <Form.Item name="opt1">
            <InputNumber
              placeholder="Enter OTP"
              className="w-100 mt-3"
              type="text"
            />
          </Form.Item>
          <Button htmlType="submit" className="w-100 mt-1">
            Verify
          </Button>
        </Form>
      </Card>
    </div>
  );
};

export default forgotOtp;
