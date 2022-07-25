import React, { useState } from "react";
import {
  Button,
  Image,
  Form,
  Input,
  Card,
  Typography,
  Modal,
  Space,
} from "antd";
import { MailOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
const { Title } = Typography;

const ForgotPassword = () => {
  const navigate = useNavigate();
  const oTpSent = () => {
    navigate("/Otp-sent");
  };
  const [visible, setVisible] = useState(false);

  return (
    <>
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
              Enter your email below to receive your password reset instruction
            </p>
          </div>

          <Form
            name="basic"
            initialValues={{ remember: true }}
            autoComplete="off"
            // onFinish={onFinish}
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
              <Button
                onClick={setVisible}
                type="primary"
                htmlType="submit"
                className="w-100"
              >
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
          <Button onClick={oTpSent}>0k</Button>
        </Modal>
      </div>
    </>
  );
};

export default ForgotPassword;
