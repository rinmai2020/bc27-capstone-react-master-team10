import React from "react";
import { Col, Row, Image } from "antd";
import { Outlet } from "react-router-dom";
import scss from "./Auth.module.scss";
import cn from "classnames";
import styled from "styled-components";
const AuthLayout = () => {
  return (
    <Auth>
      <div className="container   ">
        <Row gutter={{ xs: 8, sm: 0, md: 15, lg: 32 }} className={scss.formRow}>
          <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 14 }}>
            <img
              style={{ width: "100%", height: "100%" }}
              src="https://images.hdqwalls.com/download/doctor-strange-2016-movie-3840x2160.jpg"
              alt=""
            />
          </Col>
          <Col
            xs={{ span: 24 }}
            sm={{ span: 24 }}
            md={{ span: 10 }}
            className={scss.formCol}
          >
            <Outlet />
          </Col>
        </Row>
      </div>
    </Auth>
  );
};

export default AuthLayout;
const Auth = styled.div`
  height: 100vh;
  display: flex;
  /* margin-top: 50px; */
  /* padding: 20px; */
`;
