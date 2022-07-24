import React from "react";
import { Row, Image, Col, Tabs, Card } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import CategoryList from "./CategoryList";
const { TabPane } = Tabs;
const ProductCard = () => {
  return (
    <>
      <Card>
        <Row>
          <Col md={2}>
            <Card>
              <MenuOutlined className="mb-2" />
              <p>All</p>
            </Card>
          </Col>
          <Col md={22}>
            <Tabs defaultActiveKey="1" className="ms-2">
              <TabPane tab="Tab 1" key="1">
                <CategoryList />
              </TabPane>
              <TabPane tab="Tab 2" key="2">
                <CategoryList />
              </TabPane>
              <TabPane tab="Tab 3" key="3">
                <CategoryList />
              </TabPane>
            </Tabs>
          </Col>
        </Row>
      </Card>
    </>
  );
};

export default ProductCard;
