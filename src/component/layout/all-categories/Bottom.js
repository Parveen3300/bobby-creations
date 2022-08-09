import React, { useEffect, useState } from "react";
import { Carousel, Typography, Image, Card, Divider } from "antd";
import { homepage } from "../../../services/masterData";
import Header from "../Header";
import { StarOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import "../../../component/layout/layout.scss";
// import { Link } from "react-router-dom";

const Bottom = () => {
  const [bottoms, setBottoms] = useState([]);
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
          setBottoms(
            response.data.home_screen_service.mode_products?.[1].products_data
          );
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

      <div className="bottoms container mt-5">
        <Title level={4} className="mb-3">
          {
            title.mode_products?.[1].products_data?.[0].product_modes?.[0]
              .mode_name
          }
        </Title>
        <div className="dashboard-card">
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
                    <ShoppingCartOutlined style={{ fontSize: "24" }} />
                  </div>
                </Card>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Bottom;
