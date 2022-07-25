import React, { useState } from "react";
import { Button, Image, Form, Input, Card, Typography, Space } from "antd";
import { signupOpt } from "../services/masterData";
// import { Header } from "antd/lib/layout/layout";

const { Title } = Typography;
const tabChange = (val) => {
  let ele = document.querySelectorAll("input");
  if (ele[val - 1].value != "") {
    ele[val].focus();
  } else if (ele[val - 1].value == "") {
    ele[val - 2].focus();
  }
};

const OtpSent = () => {
  const [form] = Form.useForm();
  const onFinish = async () => {
    // var token = localStorage.getItem("userToken");
    // const header = `Authorization: token ${token}`;
    const otpdata = {
      validate_otp: "434272",
      country_short_name: "IN",
      country_long_name: "India",
      location_timezone: "Asia/Kolkata",
    };
    signupOpt(otpdata)
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          console.log(response.data);
        }
      })
      .catch((err) => {
        console.log("err");
      });
  };
  return (
    <div className="otp-sent">
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

        <Form
          name="basic"
          initialValues={{ remember: true }}
          autoComplete="off"
          form={form}
          onFinish={onFinish}
        >
          <Form className="mt-5 text-center">
            <Space>
              <Form.Item name="opt1">
                <Input
                  className="otp"
                  type="text"
                  onKeyUp={(val) => tabChange(1)}
                  maxLength="1"
                />
              </Form.Item>

              <Form.Item name="opt2">
                <Input
                  className="otp"
                  type="text"
                  onKeyUp={(val) => tabChange(2)}
                  maxLength="1"
                />
              </Form.Item>

              <Form.Item name="opt3">
                <Input
                  className="otp"
                  type="text"
                  onKeyUp={(val) => tabChange(3)}
                  maxLength="1"
                />
              </Form.Item>

              <Form.Item name="otp4">
                <Input
                  className="otp"
                  type="text"
                  onKeyUp={(val) => tabChange(4)}
                  maxLength="1"
                />
              </Form.Item>

              <Form.Item name="otp5">
                <Input
                  className="otp"
                  type="text"
                  onKeyUp={(val) => tabChange(5)}
                  maxLength="1"
                />
              </Form.Item>

              <Form.Item name="otp6">
                <Input
                  className="otp4"
                  type="text"
                  onKeyUp={(val) => tabChange(6)}
                  maxLength="1"
                />
              </Form.Item>
            </Space>
          </Form>
          <Button type="primary" htmlType="submit" className="w-100 mt-5">
            Verify
          </Button>
        </Form>
      </Card>
    </div>
  );
};

export default OtpSent;
