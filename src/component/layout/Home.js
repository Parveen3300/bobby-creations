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
import Header from "./Header";
import "../../component/form.scss";
import { homepage } from "../../services/masterData";
import CategoryList from "./CategoryList";
// // import { MenuOutlined } from "@ant-design/icons";
// import Banners from "./Homepage.json";
// import { Link } from "react-router-dom";
// import ProductCard from "./ProductCard";
const { TabPane } = Tabs;
// const { Header } = Layout;
const { Title } = Typography;
const Home = () => {
  const [banner, setbanner] = useState([]);
  const [categories, setCategories] = useState([{}]);

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
          setCategories(response.data.home_screen_service.mode_products?.[0].products_data[0]?.product_image)
            console.log(
            "mode_name",
            response.data.home_screen_service?.mode_products?.[0].products_data[0]?.product_image
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
      <div className="container">
        {/* <Divider /> */}

        <Row gutter={36}>
        <Col md={24}>
        <Carousel arrows slidesToShow={6}>
                 {
                    categories.map((data,i) => {
                        return (<><div className='mx-2'>
                            {/* <h6 className='mt-3'>{data.mode_name}</h6> */}
                            <Image src={"http://172.104.186.221:8000" + data.short_image} preview={false}/>
                            </div>
                        </>)
                    })
                } 
            </Carousel>
        </Col>
       </Row> 



         <div className="my-5 ">
          <CategoryList />
        </div> 
      </div>
    </div>
  );
};

export default Home;
