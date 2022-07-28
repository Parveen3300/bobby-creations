import React, { useState } from "react";
import {
  Button,
  Image,
  Form,
  Input,
  Card,
  Typography,
  Alert,
  Space,
} from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { useNavigate, Link } from "react-router-dom";
import { userLogin } from "../services/masterData";
const { Title } = Typography;

const Login = () => {
  const [error, setError] = useState({ status: false, message: "" });
  const navigate = useNavigate();
  const onFinish = async (props) => {
    const emailRegex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
    const phoneRegex = new RegExp(
      "[+]?[(]?[0-9]{3}[)]?[-s.]?[0-9]{3}[-s.]?[0-9]{4,6}"
    );

    userLogin({
      // email: props.email,
      // password: props.password,
      // country_short_name: "IN",
      // country_long_name: "India",
      // location_timezone: "Asia/Kolkata",

      email: emailRegex.test(props.email) ? props.email : "",
      password: props.password,
      mobile_with_isd: phoneRegex.test(props.email) ? `91${props.email}` : "",
      country_short_name: "IN",
      country_long_name: "India",
      location_timezone: "Asia/Kolkata",
    })
      .then(async (response) => {
        if (response.status === 200) {
          await {
            type: "LOGIN",
            payload: response.data,
          };
          navigate("/home");
          console.log(response.data);
        }
      })
      .catch((err) => {
        setError({ status: true });
      });
  };

  return (
    <div className="login-form">
      <Card className="position-absolute top-50 start-50 translate-middle w-50 m-auto shadow px-4 pb-4">
        <div className="text-center">
          <Image src="120x120.png" preview={false} className="mb-4" />
        </div>

        <Title level={4} className="mb-3">
          Login
        </Title>
        <Form
          name="basic"
          initialValues={{ remember: true }}
          autoComplete="on"
          onFinish={onFinish}
        >
          {error.status && (
            <Alert
              className="mb-4 px-3"
              description={error.message || "Incorrect username or password."}
              type="error"
              showIcon
            />
          )}
          <Form.Item name="email">
            <Input
              prefix={<UserOutlined className="site-form-item-icon me-2" />}
              placeholder="Username"
            />
          </Form.Item>
          <Form.Item name="password" className="mb-0">
            <Input.Password
              prefix={<LockOutlined className="site-form-item-icon me-2" />}
              placeholder="Password"
            />
          </Form.Item>

          <div className="mb-4 mt-1 text-end">
            <Link className="login-form-forgot" to="/forgot-password">
              Forgot password
            </Link>
          </div>

          <Form.Item>
            <Button htmlType="submit" className="w-100">
              Login
            </Button>
          </Form.Item>
          <Space>
            {" "}
            <p className="mb-0">Don't have an Account ?</p>{" "}
            <a href="/signup">Sign up</a>
          </Space>
        </Form>
      </Card>
    </div>
  );
};

export default Login;
