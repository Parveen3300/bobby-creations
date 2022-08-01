import React, { useState } from "react";
import {
  Button,
  Image,
  Form,
  Input,
  Card,
  Typography,
  Modal,
  Alert,
  Space,
  InputNumber,
} from "antd";
import { MailOutlined } from "@ant-design/icons";
import { forgotpassword, otpVerify } from "../services/masterData";
import { Link, useNavigate } from "react-router-dom";
const { Title } = Typography;

const ForgotPassword = () => {
  const [visible, setVisible] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [Error, setError] = useState(false);
  // const [forgot,setForgot] =useState();
  const navigate = useNavigate();
  const [emailForm] = Form.useForm();
  const [verifyOtpForm] = Form.useForm();

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
    const otpdata = {
      email_id: values.email,
      mobile_with_isd: "91",
      country_long_name: "India",
      country_short_name: "IN",
      location_timezone: "Asia/Kolkata",
    };
    forgotpassword(otpdata)
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          console.log(response.data);
          setOtpSent(true);
        }
      })
      .catch((err) => {
        setError(true);
      });
  };

  const oTpSent = () => {
    navigate("/create-password", {
      state: {
        email_id: emailForm.getFieldValue("email"),
        validate_otp: verifyOtpForm.getFieldValue(["opt1"]),
      },
    });
  };

  const verifyOtp = (values, email) => {
    // form.getFieldValue(["opt1"]);
    console.log("email", emailForm.getFieldValue());
    const forgotverify = {
      validate_otp: values.opt1,
      mobile_with_isd: "91",
      email_id: emailForm.getFieldValue("email"),
      country_short_name: "IN",
      country_long_name: "India",
      location_timezone: "Asia/Kolkata",
    };
    console.log("forgotverify", forgotverify);
    otpVerify(forgotverify)
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          console.log(response.data);
          setVisible(true);
        }
      })
      .catch((err) => {
        // setError(true);
        console.log("err", err);
      });
  };

  return (
    <>
      {otpSent ? (
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
              <p>Enter OTP sent on email ID</p>
            </div>
            {/* {error && (
          <Alert
            className="mb-2 px-3"
            description={"Incorrect otp."}
            type="error"
            showIcon
          />
        )} */}
            <Form name="otpForm" form={verifyOtpForm} onFinish={verifyOtp}>
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

          <Modal
            title="Alert"
            centered
            visible={visible}
            onOk={() => setVisible(false)}
            onCancel={() => setVisible(false)}
            width={300}
            footer={false}
            className="text-center"
          >
            <p>
              You Have Successfully Verified Your Mobile Number. Create new
              Password
            </p>
            <Button onClick={oTpSent}>0k</Button>
          </Modal>
        </div>
      ) : (
        <div className="forgot-password">
          <Card className="position-absolute top-50 start-50 translate-middle w-50 m-auto shadow  px-md-5 py-4">
            <div className="text-center mb-5">
              <Image
                src="forgot.png"
                preview={false}
                className="my-4"
                width={80}
              />
              <Title level={4} className="mb-2">
                Forgot password
              </Title>
              <p>
                Enter your email below to receive your password reset
                instruction
              </p>
            </div>
            {Error && (
              <Alert
                className="mb-4 px-3"
                description="Not acceptable, This Email Not Register"
                type="error"
                showIcon
              />
            )}
            <Form
              name="emailForm"
              initialValues={{ remember: true }}
              autoComplete="on"
              onFinish={onFinish}
              form={emailForm}
            >
              <Form.Item
                name="email"
                rules={[
                  {
                    type: "email",
                    message: "The input is not valid E-mail!",
                  },
                  {
                    required: true,
                    message: "Please input your E-mail!",
                  },
                ]}
              >
                <Input
                  prefix={<MailOutlined className="site-form-item-icon me-2" />}
                  placeholder="Email Id"
                />
              </Form.Item>

              <Form.Item>
                <Button htmlType="submit" className="w-100">
                  Send Otp
                </Button>
              </Form.Item>
              <Space>
                {" "}
                <p className="mb-0">Return to ?</p> <a href="/login">Sign In</a>
              </Space>
              {/* <Link to="/login">Return to Sign In</Link> */}
            </Form>
          </Card>

          <Modal
            title="Alert"
            centered
            visible={visible}
            onOk={() => setVisible(false)}
            onCancel={() => setVisible(false)}
            width={300}
            footer={false}
            className="text-center"
          >
            <p>OTP sent to your mobile/Email,Please check</p>
            <Button>0k</Button>
          </Modal>
        </div>
      )}
    </>
  );
};

export default ForgotPassword;
