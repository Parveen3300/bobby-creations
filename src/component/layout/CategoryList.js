import React from "react";
import Categories from "../layout/Homepage.json";
import { Carousel, Image, Typography, Card } from "antd";
const { Title } = Typography;
const CategoryList = () => {
  return (
    <>
      <Title level={4} className="mb-3">
        Tops-Tees
      </Title>
      <Carousel arrows slidesToShow={6}>
        {Categories.Categories.map((data) => {
          return (
            <>
              <Card className="mx-2">
                <Image src={data.category_img} />
                <h6 className="mt-3">{data.category_name}</h6>
              </Card>
            </>
          );
        })}
      </Carousel>
    </>
  );
};
export default CategoryList;
