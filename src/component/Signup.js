import React, { useState } from "react";
import { Card, Typography, Tabs, Avatar, Space, Tooltip } from "antd";
import { UserOutlined } from "@ant-design/icons";
import UserDetails from "./form/UserDetails";
import CompanyDetails from "./form/CompanyDetails";
import { Link } from "react-router-dom";
const { Title } = Typography;
const { TabPane } = Tabs;
const Signup = () => {
  const [disabled, setDisabled] = useState(true);
  const [activeKey, setActiveKey] = useState("1");

  return (
    <div className="signup">
      <Card className="position-absolute top-50 start-50 translate-middle w-50 m-auto shadow px-4 pb-4">
        <div className="text-center">
          {/* <Avatar
            size={{ lg: 64, xl: 80, xxl: 100 }}
            icon={
              <UserOutlined className="position-absolute top-50 start-50 translate-middle" />
            }
          /> */}
        </div>
        <Title level={4} className="mb-3">
          Create Account
        </Title>
        <Tabs defaultActiveKey={activeKey} activeKey={activeKey} type="card">
          <TabPane tab="USER DETAILS" key="1">
            <UserDetails setDisabled={setDisabled} setActiveKey={setActiveKey} />
          </TabPane>
          <TabPane tab="COMPANY DETAILS" disabled={disabled} key="2">
            <CompanyDetails />
          </TabPane>
        </Tabs>

        <Space className=''><p className="mb-0">Already have an Account ? </p><Link to="/login">Sign in</Link></Space>
      </Card>
    </div >
  );
};

export default Signup;
