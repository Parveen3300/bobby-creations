import React, { useState } from "react";
import { Col, Row, Select, Input, Badge, Menu, Dropdown,Image } from 'antd'
import { Link } from "react-router-dom";
// import GlobalSearch from "../features/GlobalSearch";
// import { logo } from "../utils/ImagePath";
import { HeartOutlined, ShoppingCartOutlined,BellOutlined, UserOutlined, EnvironmentOutlined, ExportOutlined } from '@ant-design/icons';
// import { Link } from 'react-router-dom'
import "./layout.scss";
import menuList from "./MenuList.json";
const { Option } = Select;
const { Search } = Input;

const menu = (
    <Menu
        items={[
            {
                key: '1',
                label: (
                    <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                        <UserOutlined /> My Account
                    </a>
                ),
            },
            // {
            //     key: '2',
            //     label: (
            //         <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
            //             <EnvironmentOutlined /> Order Tracking
            //         </a>
            //     ),
            // },
            {
                key: '3',
                label: (
                    <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
                        <HeartOutlined /> My Wishlist
                    </a>
                ),
            },
            {
                key: '4',
                label: (
                    <a target="_blank" rel="noopener noreferrer" href="/login">
                        <ExportOutlined /> Sign Out
                    </a>
                ),
            },
        ]}
    />
);
const Header = () => {
//   const [searchModal, setSearchModal] = useState(false);
//   const [itemsInCart, setItemsInCart] = useState(0);
//   let data = menuList.menuList;
  return (
    <div className='shadow-sm headeriind bg-white' style={{ position: "sticky", top: "0px", zIndex: "2" }}>
        <div className='container'>
            <Row style={{ alignItems: "center" }}>
                <Col md={6}>
                <Image
                src="120x120.png"
                preview={false}
                className="my-2"
                width={130}
                height={100}
              />
                </Col>
                <Col md={12}>
                    <div className='form-section'>
                        <Search
                            placeholder="input search text"
                            allowClear
                        />
                    </div>
                </Col>
                <Col md={6}>
                    <div className='wca'>
                        <ul>
                            <li><Link to="">   <Badge count={1}>
                                <HeartOutlined />
                            </Badge></Link></li>
                            <li><Link to=""><Badge count={1}>
                                <ShoppingCartOutlined  />
                            </Badge></Link></li>
                            <li><Link to=""><Badge >
                            <BellOutlined />
                            </Badge></Link></li>
                            <li><Link to=""><Dropdown
                                overlay={menu}
                                placement="bottomRight"
                                arrow={{
                                    pointAtCenter: true,
                                }}
                            >
                                <UserOutlined />
                            </Dropdown></Link></li>

                        </ul>
                    </div>
                </Col>
            </Row>
        </div>
    </div>
)
}
export default Header;
