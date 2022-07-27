import React, { useEffect, useState } from "react";
import {
  Layout,
  Menu,
  Carousel,
  Typography,
  Row,
  Image,
  Col,
  Tabs,
  Card,
} from "antd";
import "../component/form.scss";
import { homepage } from "../services/masterData";
// // import { MenuOutlined } from "@ant-design/icons";
// import Banners from "./Homepage.json";
import { Link } from "react-router-dom";
import CategoryList from "./CategoryList";
// import ProductCard from "./ProductCard";
const { TabPane } = Tabs;
const { Header } = Layout;
const { Title } = Typography;
const Home = () => {
  const [banner, setbanner] = useState([]);
  const [Categories, setCategories] = useState([]);

  useEffect(() => {
    homepage({
      last_sync_datetime: "2022-07-27T04:49:09.177626",
      country_short_name: "IN",
      country_long_name: "India",
      location_timezone: "Asia/Kolkata",
    })
      .then((response) => {
        if (response.status === 200) {
          setbanner(response.data.home_screen_service.new_banners);
          console.log(
            "bannner",
            response.data.home_screen_service.mode_products[0].products_data[0]
              .product_alias_name
          );
          setCategories(
            response.data.home_screen_service.mode_products[0].products_data[0]
              .product_alias_name
          );
        }
      })
      .catch((err) => {
        console.log("error");
      });
  }, []);

  // let imagepath = Banners.Banners;
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
        <Menu theme="light" mode="horizontal" className="  mt-3 w-50">
          <Menu.Item key="1">
            <Link to="/home">Items1</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/home">Items2</Link>
          </Menu.Item>{" "}
          <Menu.Item key="3">
            <Link to="/login">Login</Link>
          </Menu.Item>
          <Menu.Item key="4">
            <Link to="/Logout">Logout</Link>
          </Menu.Item>
        </Menu>
      </Header>

      <div className="banner">
        <Carousel autoplay arrows effect="fade" className="h-50">
          {banner.map((data, index) => (
            <Image
              src={"http://172.104.186.221:8000" + data.banner_image_large}
              preview={false}
            />
          ))}
        </Carousel>
      </div>
      <div className="container">
        {/* <Divider /> */}

        <Row className="mt-5">
          <Col md={24}>
            <Tabs defaultActiveKey="1" type="card" className="ms-2">
              <TabPane tab="Tab 1" className="mt-5" key="1">
                <Title level={4} className="mb-3">
                  Tops-Tees
                </Title>
                <Carousel arrows slidesToShow={4}>
                  {console.log("data", Categories)}
                  {Categories.Categories?.map((data, index) => {
                    console.log("data", data);
                    return (
                      <>
                        <Card className="mx-2">
                          <Image
                            preview={false}
                            src={
                              "http://172.104.186.221:8000" +
                              data.product_image[0]
                            }
                          />
                          <h6 className="mt-3">{data.Categories}</h6>
                        </Card>
                      </>
                    );
                  })}
                </Carousel>
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
