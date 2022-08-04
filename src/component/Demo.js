import React, { useState } from "react";
import { Button, Card, Form, Input } from "antd";

const Demo = () => {
  // const number = [3, 6, 7, 2, 4, 6, 6, 2, 2, 2, 1, 1];
  // number.filter((data, i) => {
  //   return console.log("number", data >= 3, i);
  //   const num =(nums)=>{
  //     return nums >= 18
  //   }
  // });

  const names = [
    "James",
    "John",
    "Paul",
    "Ringo",
    "George",
    "Garg-raj",
    "Radha-Abhishek",
    "James",
    "John",
    "Paul",
    "Ringo",
    "George",
    "Garg-raj",
    "Radha-Abhishek",
  ];

  const [Data, setData] = useState("");
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log("Recyeived values of form: ", values.password, values.username);
    setData(form.getFieldValue(["username"]));
  };
  return (
    <Card className="mt-5 w-50 m-auto px-md-5 py-4 shadow otp-sent">
      <p>{Data}</p>
      {names
        .filter((names) => names.includes("G"))
        .map((filtername) => (
          <li>{filtername}</li>
        ))}
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
