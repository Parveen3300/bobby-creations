import React, { useEffect, useState } from "react";
import { Carousel, Typography, Image, Card, Divider } from "antd";
import { homepage } from "../../../services/masterData";
import Header from "../Header";
import { StarOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import "../../../component/layout/layout.scss";
import { Link } from "react-router-dom";
const AllCategories = () => {
    const [shopCategories, setShopCategories] = useState([]);
  const [title, setTitle] = useState([]);
  const { Title } = Typography;
  useEffect(() => {
    homepage({
      last_sync_datetime: "2022-07-27T04:49:09.177626",
      country_short_name: "IN",
      country_long_name: "India",
      location_timezone: "Asia/Kolkata",
    })
      .then((response) => {
        if (response.status === 200) {
            setShopCategories(response.data.home_screen_service.mode_products);
          setTitle(response.data.home_screen_service);
        }
      })
      .catch((err) => {
        console.log("error");
      });
  }, []);

  return (
    <div className="DesinerDress">
      <Header />

      <div className="mt-5 desiner-dress container ">
      <Title level={4} className="my-5">
          Shop By Categories
          </Title>
        <div className="dashboard-card">
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
        </div>
      </div>
    </div>
  );
};

export default AllCategories;
