import React, { useState, useEffect } from "react";
import {
  InsertRowLeftOutlined,
  UserOutlined,
  MailOutlined,
  TagOutlined,
} from "@ant-design/icons";
import { Button, Select, Form, Input, Row, Col, Space } from "antd";
import "../../form.scss";
import { useNavigate } from "react-router-dom";
import {
  configuration_update_records,
  companyDetailsAPI,
} from "../../../services/masterData";
const { Option } = Select;

const CompanyDetails = ({ customerId }) => {
  const navigate = useNavigate();
  const [countries, setcountriesData] = useState([]);
  const [business, setBusinessData] = useState([]);
  const onFinish = async (props) => {
    let formData = new FormData();
    formData.append("customer_company_name", props.customer_company_name);
    formData.append("brand", props.brandname);
    formData.append("email_id", props.email_id);
    formData.append("contact_no", props.contact_no);
    formData.append("mobile_with_isd", "91" + props.contact_no);
    formData.append("is_existing_cx", "0");
    formData.append("business_type_other", "Chain Store");
    formData.append("business_type", props.business);
    formData.append("latitude", "76.3293829");
    formData.append("longitude", "98.8978978");
    formData.append("isd", "91");
    formData.append("profile_picture", "");
    formData.append("customer", customerId);
    formData.append("address", "abc");
    formData.append("country", props.country);
    formData.append("country_short_name", "IN");
    formData.append("country_long_name", "India");
    formData.append("location_timezone", "Asia/Kolkata");

    companyDetailsAPI(formData)
      .then((response) => {
        if (response.status === 201) {
          console.log(response.data);
          navigate("/Otp-sent");
        }
      })
      .catch((err) => {
        console.log("error");
      });
  };
  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{ width: 76 }}>
        {countries.map((item, index) => {
          return (
            <Option key={index} value={item.id}>
              +{item.isd}
            </Option>
          );
        })}
      </Select>
    </Form.Item>
  );

  useEffect(() => {
    configuration_update_records()
      .then((res) => {
        console.log(
          "countryCodes",
          res.data.configuration_updated_records.country_data
        );
        let country_data = res.data.configuration_updated_records.country_data;
        let business_type_data =
          res.data.configuration_updated_records.business_type_data;
        // console.log(country_data);
        setcountriesData(country_data);
        setBusinessData(business_type_data);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, []);
  return (
    <div className="company-details">
      <Form
        name="normal_login"
        initialValues={{
          prefix: "+91",
        }}
        onFinish={onFinish}
      >
        <Row gutter={24}>
          <Col md={12}>
            <Form.Item
              name="customer_company_name"
              rules={[
                {
                  required: true,
                  message: "Please input your company name",
                },
              ]}
            >
              <Input
                prefix={
                  <InsertRowLeftOutlined className="site-form-item-icon me-2 " />
                }
                placeholder="Company Name"
              />
            </Form.Item>
          </Col>

          <Col md={12}>
            <Form.Item
              name="brandname"
              rules={[
                {
                  required: true,
                  message: "Please input your brand name",
                },
              ]}
            >
              <Input
                prefix={<TagOutlined className="site-form-item-icon me-2" />}
                placeholder="Brand Name"
              />
            </Form.Item>
          </Col>

          <Col md={12}>
            <Form.Item
              name="email_id"
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
                placeholder="Company Email Id"
              />
            </Form.Item>
          </Col>

          <Col md={12}>
            <Form.Item
              name="contact_no"
              rules={[
                { required: true, message: "Please input your phone number!" },
              ]}
            >
              <Input
                placeholder="Phone number"
                className="form-input"
                addonBefore={prefixSelector}
                style={{ width: "100%" }}
              />
            </Form.Item>
          </Col>

          <Col md={12}>
            <Form.Item name="business" rules={[{ required: true }]}>
              <Select placeholder="What is your company info " allowClear>
                {business.map((item, index) => {
                  return (
                    <Option key={index} value={item.id}>
                      {item.business_type}
                    </Option>
                  );
                })}
              </Select>
            </Form.Item>
          </Col>

          <Col md={12}>
            <Form.Item name="country" rules={[{ required: true }]}>
              <Select placeholder="Select country" allowClear>
                {countries.map((item, index) => {
                  return (
                    <Option key={item} value={item.id}>
                      {item.country}
                    </Option>
                  );
                })}
              </Select>
            </Form.Item>
          </Col>
        </Row>
        <Form.Item>
          <Button htmlType="submit" className="w-100 mt-4">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default CompanyDetails;
