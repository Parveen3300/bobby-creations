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
const { Title } = Typography;
const forgotOtp = () => {
  //   const [error, setError] = useState(false);
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
        <Form name="basic">
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
