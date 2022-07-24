import React from "react";
import {
  Layout,
  Menu,
  Carousel,
  Divider,
  Row,
  Image,
  Col,
  Tabs,
  Card,
} from "antd";
import { MenuOutlined } from "@ant-design/icons";
import Banners from "./Homepage.json";
import { Link } from "react-router-dom";
import "../component/form.scss";
import CategoryList from "./CategoryList";
import ProductCard from "./ProductCard";
const { TabPane } = Tabs;
const { Header } = Layout;

const Home = () => {
  let imagepath = Banners.Banners;
  return (
    <div className="container-fluid">
      <Header className="header shadow-sm">
        <Link to="/">
          <Image
            src="120x120.png"
            preview={false}
            className="my-2"
            width={130}
            height={100}
          />
        </Link>
        <Menu theme="light" mode="horizontal" className="float-end mt-2 w-50">
          <Menu.Item key="1">
            <Link to="/home">Items1</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/home">Items2</Link>
          </Menu.Item>{" "}
          {/* <Menu.Item key="3">
            <Link to="/login">Login</Link>
          </Menu.Item> */}
          <Menu.Item key="4">
            <Link to="/Logout">Logout</Link>
          </Menu.Item>
        </Menu>
      </Header>
      <Carousel autoplay arrows className="w-100">
        {imagepath?.map((data, index) => (
          <Image
            className="w-100"
            src={data?.url}
            preview={false}
            style={{ height: "400rem" }}
          />
        ))}
      </Carousel>
      <div className="container">
        <Divider />

        <Row>
          <Col md={2}>
            <Card>
              <MenuOutlined className="mb-2" />
              <p>All</p>
            </Card>
          </Col>
          <Col md={22}>
            <Tabs defaultActiveKey="1" className="ms-2 ">
              <TabPane tab="Tab 1" className="mt-5" key="1">
                <CategoryList />
              </TabPane>
              <TabPane tab="Tab 2" className="mt-5" key="2">
                <CategoryList />
              </TabPane>
              <TabPane tab="Tab 3" className="mt-5" key="3">
                <CategoryList />
              </TabPane>
            </Tabs>
          </Col>
        </Row>
        {/* <div className="my-5 ">
          <CategoryList />
        </div> */}
      </div>
    </div>
  );
};

export default Home;
