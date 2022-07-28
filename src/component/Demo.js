import React, { useState } from "react";
import { Button, Card, Form, Input } from "antd";

const Demo = () => {
  const [Data, setData] = useState("");
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log("Received values of form: ", values.password, values.username);
    setData(form.getFieldValue(["username"]));
  };
  return (
    <Card className="position-absolute top-50 start-50 translate-middle w-50 m-auto px-md-5 py-4 shadow otp-sent">
      <p>{Data}</p>
      <Form
        name="normal_login"
        className="login-form mt-5"
        form={form}
        onFinish={onFinish}
      >
        <Form.Item name="username">
          <Input placeholder="Username" />
        </Form.Item>

        <Form.Item name="password">
          <Input placeholder="Password" />
        </Form.Item>

        <Form.Item>
          <Button htmlType="submit" className="login-form-button">
            sumbit
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default Demo;
