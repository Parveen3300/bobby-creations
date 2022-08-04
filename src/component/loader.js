import React from "react";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const antIcon = <LoadingOutlined style={{ fontSize: 50 }} spin />;

const Loader = () => {
  return (
    <>
      <div
        className="d-flex align-items-center justify-content-center w-100"
        style={{ height: "100vh" }}
      >
        <Spin indicator={antIcon} />
      </div>
    </>
  );
};

export default Loader;
