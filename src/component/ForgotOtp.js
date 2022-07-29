import React, { useState } from "react";
import {
  Button,
  Image,
  Form,
  Card,
  Typography,
  Alert,
  Modal,
  InputNumber,
} from "antd";
import { useNavigate } from "react-router-dom";
import { otpVerify } from "../services/masterData";
const { Title } = Typography;

const ForgotOtp = (props) => {
  // const [error, setError] = useState(false);
  console.log("sdadas", props);
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  const oTpSent = () => {
    navigate("/create-password");
  };

  const [form] = Form.useForm();
  const onFinish = (values, props) => {
    // form.getFieldValue(["opt1"]);
    console.log("values", values);
    const forgotverify = {
      validate_otp: values.opt1,
      mobile_with_isd: "91",
      email_id: props?.state?.email,
      country_short_name: "IN",
      country_long_name: "India",
      location_timezone: "Asia/Kolkata",
    };
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
        <Form name="basic" form={form} onFinish={onFinish}>
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
          You Have Successfully Verified Your Mobile Number. Create new Password
        </p>
        <Button onClick={oTpSent}>0k</Button>
      </Modal>
    </div>
  );
};

export default ForgotOtp;
