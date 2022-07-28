import React, { useState } from "react";
import {
  LockOutlined,
  UserOutlined,
  MailOutlined,
  ProfileOutlined,
} from "@ant-design/icons";
import { Button, Row, Col, Select, Form, Input, Alert } from "antd";
import { userDetailsAPI } from "../../services/masterData";
import "../form.scss";
const { Option } = Select;

const UserDetails = ({
  setDisabled,
  setActiveKey,
  customerId,
  setcustomerId,
}) => {
  const [error, setError] = useState({ status: false, message: "" });
  const onFinish = async (props) => {
    let formData = new FormData();
    formData.append("first_name", props.first_name);
    formData.append("middle_name", props.middle_name);
    formData.append("last_name", props.last_name);
    formData.append("email", props.email);
    formData.append("phone", props.phone);
    formData.append("designation", props.designation);
    formData.append("password", props.password);
    formData.append("isd", "91");
    formData.append("country_short_name", "IN");
    formData.append("country", "1");
    formData.append("code", "ew");
    formData.append("imei_no", "423423423432423");
    formData.append("mobile", props.phone);
    formData.append("mobile_with_isd", "91" + props.phone);
    formData.append("gender", "male");
    formData.append("registration_type", "android");
    formData.append("registration_datetime", "2018-01-10 12:12:34.876545");
    formData.append("device_id", "432423423423443");
    formData.append("imei_no", "423423423432423");
    formData.append("device_name", "ix");
    formData.append("profile_picture", "");
    formData.append("timezone_name", "Asia/Kolkata");
    formData.append("country_short_name", "IN");
    formData.append("country_long_name", "India");
    formData.append("location_timezone", "Asia/Kolkata");

    userDetailsAPI(formData)
      .then((response) => {
        if (response.status === 201) {
          console.log(response.data);
          setDisabled(false);
          setActiveKey("2");
          setcustomerId(response?.data?.api_create_profile?.profile_data?.id);
          localStorage.setItem(
            "userToken",
            response?.data?.api_create_profile?.user_login_token
          );
        }
      })
      .catch((err) => {
        setError({ status: true });
      });
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="91">+91</Option>
        <Option value="11">+11</Option>
      </Select>
    </Form.Item>
  );

  return (
    <div className="user-details">
      {error.status && (
        <Alert
          className="mb-4 px-3"
          description={
            error.message || "Email or  m  obile number already exist."
          }
          type="error"
          showIcon
        />
      )}
      <Form
        name="normal_login"
        initialValues={{ remember: true }}
        autoComplete="on"
        onFinish={onFinish}
      >
        <Row gutter={24} className="mt-2">
          <Col md={12}>
            <Form.Item
              name="first_name"
              rules={[
                {
                  required: true,
                  message: "Please input your First name",
                },
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon me-2" />}
                placeholder="First Name"
              />
            </Form.Item>
          </Col>

          <Col md={12}>
            <Form.Item
              name="middle_name"
              rules={[
                {
                  required: true,
                  message: "Please input Middle name",
                },
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon me-2" />}
                placeholder="Middle Name"
              />
            </Form.Item>
          </Col>
          <Col md={12}>
            <Form.Item
              name="last_name"
              rules={[
                {
                  required: true,
                  message: "Please input last name",
                },
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon me-2" />}
                placeholder="last Name"
              />
            </Form.Item>
          </Col>
          <Col md={12}>
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
          </Col>
          <Col md={12}>
            <Form.Item
              name="phone"
              rules={[
                { required: true, message: "Please input your phone number!" },
              ]}
            >
              <Input
                placeholder="Phone number"
                className="form-input"
                addonBefore={prefixSelector}
                // style={{ width: "100%" }}
              />
            </Form.Item>
          </Col>
          <Col md={12}>
            <Form.Item
              name="designation"
              rules={[
                {
                  required: true,
                  message: "Please input designation",
                },
              ]}
            >
              <Input
                prefix={
                  <ProfileOutlined className="site-form-item-icon me-2" />
                }
                placeholder="designation"
              />
            </Form.Item>
          </Col>
          <Col md={12}>
            <Form.Item
              name="password"
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
                placeholder="Password"
              />
            </Form.Item>
          </Col>
          <Col md={12}>
            <Form.Item
              name="confirm"
              dependencies={["password"]}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: "Please confirm your password!",
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
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
                placeholder="Confirm Password"
              />
            </Form.Item>
          </Col>
          <Col md={24}>
            <Form.Item>
              <Button
                htmlType="submit"
                className="w-100 mt-4"
                // onClick={() => setDisabled(false)}
              >
                Submit
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default UserDetails;
