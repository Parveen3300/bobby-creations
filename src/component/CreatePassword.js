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
import { LockOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { changePassword } from "../services/masterData";
const { Title } = Typography;

const CreatePassword = () => {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  const oTpSent = () => {
    navigate("/login");
  };
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log("change", values);
    const Passworddata = {
      mobile_with_isd: "91",
      validate_otp: "418149",
      email_id: "parveen.kr3300.21@gmail.com",
      new_password: values.changepassword,
      country_short_name: "IN",
      country_long_name: "India",
      location_timezone: "Asia/Kolkata",
    };
    changePassword(Passworddata)
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          console.log(response.data);
          setVisible(true);
        }
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  return (
    <div className="login-form">
      <Card className="position-absolute top-50 start-50 translate-middle w-50 m-auto shadow px-4 pb-4">
        <div className="text-center">
          <Image src="Lock.png" preview={false} className="my-4" width={80} />
        </div>

        <Title level={4} className="mb-3">
          Change Password
        </Title>
        <Form name="basic" autoComplete="on" form={form} onFinish={onFinish}>
          <Form.Item
            name="changepassword"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
            hasFeedback
          >
            <Input.Password
              prefix={<LockOutlined />}
              placeholder="New Password"
            />
          </Form.Item>
          <Form.Item
            name="Confirm"
            dependencies={["password"]}
            hasFeedback
            rules={[
              {
                required: true,
                message: "Please confirm your password!",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("changepassword") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error(
                      "The two passwords that you entered do not match!"
                    )
                  );
                },
              }),
            ]}
          >
            <Input.Password
              prefix={<LockOutlined />}
              placeholder="Confirm New Password"
            />
          </Form.Item>

          <Form.Item>
            <Button htmlType="submit" className="w-100">
              Update Password
            </Button>
          </Form.Item>
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
        <p>You Have Successfully Change Password</p>
        <Button onClick={oTpSent}>Login</Button>
      </Modal>
    </div>
  );
};

export default CreatePassword;
