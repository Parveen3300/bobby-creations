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
  Divider,
  Space,
  Button,
} from "antd";
import Header from "./Header";
import "../../component/form.scss";
import { homepage } from "../../services/masterData";
// import CategoryList from "./CategoryList";
import { StarOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
// import Banners from "./Homepage.json";
// import { Link } from "react-router-dom";
// import ProductCard from "./ProductCard";
const { Title } = Typography;
const { TabPane } = Tabs;
const Home = () => {
  const [banner, setbanner] = useState([]);
  const [categories, setCategories] = useState([]);
  const [shopCategories, setShopCategories] = useState([]);
  const [title, setTitle] = useState([]);
  const [bottoms, setBottoms] = useState([]);
  const [summerdress, setSummerdress] = useState([]);
  const [womenshirts, setWomenshirts] = useState([]);

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
          setCategories(
            response.data.home_screen_service.mode_products?.[0].products_data
          );
          setTitle(response.data.home_screen_service);
          setBottoms(
            response.data.home_screen_service.mode_products?.[1].products_data
          );
          setShopCategories(response.data.home_screen_service.mode_products);
          setSummerdress(
            response.data.home_screen_service.mode_products?.[2].products_data
          );
          setWomenshirts(
            response.data.home_screen_service.mode_products?.[3].products_data
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
      <Header />
      <div className="banner">
        <Carousel autoplay arrows effect="fade" className="h-75">
          {banner.map((data, index) => (
            <Image
              src={"http://172.104.186.221:8000" + data.banner_image_large}
              preview={false}
            />
          ))}
        </Carousel>
      </div>

      <div className="mt-5 h-50 container" style={{ padding: "0px 12px" }}>
        <Title level={4} className="my-5">
          Shop By Categories
        </Title>
        <Carousel arrows autoplay slidesToShow={4}>
          {shopCategories.map((data) => {
            return (
              <>
                <Link
                  to="/"
                  className="center category"
                  style={{ display: "block" }}
                >
                  <Image
                    src={
                      "http://172.104.186.221:8000" +
                      data.products_data?.[2].product_image?.[0].short_image
                    }
                    preview={false}
                    className="short_image"
                  />
                  <h6 className="mt-4">
                    {data.products_data?.[0].product_modes?.[0].mode_name}
                  </h6>
                </Link>
              </>
            );
          })}
        </Carousel>
      </div>

      <div className="container">
        {/* <Divider /> */}

        <Tabs defaultActiveKey="1">
          <TabPane tab="Designer Dresses" key="1">
            <div className="mt-5 desiner-dress">
              <div className="d-flex justify-content-between">
                <Title level={4} className="mb-3">
                  {
                    title.mode_products?.[0].products_data?.[0]
                      .product_modes?.[0].mode_name
                  }
                </Title>
                <Button href="/desiner-dress">View All</Button>
              </div>
              <Carousel arrows autoplay slidesToShow={6}>
                {categories.map((data, i) => {
                  return (
                    <>
                      <Card className="mx-2 my-2 text-center">
                        <div className="product_image">
                          <Image
                            src={
                              "http://172.104.186.221:8000" +
                              data.product_image?.[0].short_image
                            }
                            preview={false}
                            className="short_image"
                          />
                        </div>
                        <h6 className="mt-3 fs-12">{data.product_name}</h6>
                        <Divider />
                        <div className="d-flex justify-content-between mx-2">
                          <StarOutlined style={{ fontSize: "24" }} />
                          <ShoppingCartOutlined style={{ fontSize: "24" }} />
                        </div>
                      </Card>
                    </>
                  );
                })}
              </Carousel>
            </div>
          </TabPane>
          <TabPane tab="Bottoms" key="2">
            <div className="bottoms">
              <Row gutter={36} className="mt-5">
                <Col md={24}>
                  <div className="d-flex justify-content-between">
                    <Title level={4} className="mb-3">
                      {
                        title.mode_products?.[1].products_data?.[0]
                          .product_modes?.[0].mode_name
                      }
                    </Title>
                    <Button href="/bottom">View All</Button>
                  </div>
                  <Carousel arrows autoplay slidesToShow={6}>
                    {bottoms.map((data, i) => {
                      return (
                        <>
                          <Card className="mx-2 my-2 text-center">
                            <div className="product_image">
                              <Image
                                src={
                                  "http://172.104.186.221:8000" +
                                  data.product_image?.[0].short_image
                                }
                                preview={false}
                                className="short_image"
                              />
                            </div>
                            <h6 className="mt-3 fs-12">{data.product_name}</h6>
                            <Divider />
                            <div className="d-flex justify-content-between mx-2">
                              <StarOutlined style={{ fontSize: "24" }} />
                              <ShoppingCartOutlined
                                style={{ fontSize: "24" }}
                              />
                            </div>
                          </Card>
                        </>
                      );
                    })}
                  </Carousel>
                </Col>
              </Row>
            </div>
          </TabPane>
          <TabPane tab="Women Shirts" key="3">
            <div className="Women-shirts">
              <Row gutter={36} className="mt-5">
                <Col md={24}>
                  <Title level={4} className="mb-3">
                    {
                      title.mode_products?.[3].products_data?.[0]
                        .product_modes?.[0].mode_name
                    }
                  </Title>
                  <Carousel arrows autoplay slidesToShow={6}>
                    {womenshirts.map((data) => {
                      return (
                        <>
                          <Card className="mx-2 my-2 text-center">
                            <div className="product_image">
                              <Image
                                src={
                                  "http://172.104.186.221:8000" +
                                  data.product_image?.[0].short_image
                                }
                                preview={false}
                                className="short_image"
                              />
                            </div>
                            <h6 className="mt-3 fs-12">{data.product_name}</h6>
                            <Divider />
                            <div className="d-flex justify-content-between mx-2">
                              <StarOutlined style={{ fontSize: "24" }} />
                              <ShoppingCartOutlined
                                style={{ fontSize: "24" }}
                              />
                            </div>
                          </Card>
                        </>
                      );
                    })}
                  </Carousel>
                </Col>
              </Row>
            </div>
          </TabPane>
          <TabPane tab="Summer dress" key="4">
            <div className="summer-dress">
              <Row gutter={36} className="mt-5">
                <Col md={24}>
                  <Title level={4} className="mb-3">
                    {
                      title.mode_products?.[2].products_data?.[0]
                        .product_modes?.[0].mode_name
                    }
                  </Title>
                  {/* <Carousel arrows autoplay slidesToShow={6}> */}
                  <Space>
                    {summerdress.map((data, i) => {
                      return (
                        <>
                          <Card className="mx-2 my-2 text-center">
                            <div className="product_image">
                              <Image
                                src={
                                  "http://172.104.186.221:8000" +
                                  data.product_image?.[0].short_image
                                }
                                preview={false}
                                className="short_image"
                              />
                            </div>
                            <h6 className="mt-3 fs-12">{data.product_name}</h6>
                            <Divider />
                            <div className="d-flex justify-content-between mx-2">
                              <StarOutlined style={{ fontSize: "24" }} />
                              <ShoppingCartOutlined
                                style={{ fontSize: "24" }}
                              />
                            </div>
                          </Card>
                        </>
                      );
                    })}
                    {/* </Carousel> */}
                  </Space>
                </Col>
              </Row>
            </div>
          </TabPane>
        </Tabs>

        <div className="my-5 ">{/* <CategoryList /> */}</div>
      </div>
    </div>
  );
};

export default Home;
