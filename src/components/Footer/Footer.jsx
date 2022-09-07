import { Row, Col } from "antd";
import React from "react";
import {
  AiFillFacebook,
  AiOutlineInstagram,
  AiFillYoutube,
  AiOutlineApple,
  AiOutlineAndroid,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import scss from "./Footer.module.scss";
// import useStyles from "./style";
export default function Footer() {
  // const scss = useStyles();
  return (
    <div className="container">
      <Row>
        <Col lg={{ span: 6 }}>
          <Link className={scss.Logo} to="/">
            Dr. LoGo
          </Link>
        </Col>
        <Col lg={{ span: 6 }}>
          <h5 className={scss.h5}>Doi tac</h5>
          <Row>
            <Col className={scss.InfoFooter}>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.cgv.vn/"
              >
                CGV
              </a>
              <a
                className="col-6 col-lg-12"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.cgv.vn/"
              >
                Galaxy
              </a>
            </Col>
          </Row>
        </Col>
        <Col className={scss.InfoFooter} lg={{ span: 6 }}>
          <h5 className={scss.h5}>Chính sách</h5>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.cgv.vn/"
          >
            FAQ
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.cgv.vn/"
          >
            Brand Guidelines
          </a>
          <a
            className="col-6 col-lg-12"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.cgv.vn/"
          >
            Thỏa thuận sử dụng
          </a>
          <a
            className="col-6 col-lg-12"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.cgv.vn/"
          >
            Chính sách bảo mật
          </a>
        </Col>
        <Col className={scss.App} lg={{ span: 6 }}>
          <h5 className={scss.h5}>App</h5>
          <AiOutlineApple />
          <AiOutlineAndroid />
        </Col>
      </Row>
      <hr style={{ color: "#fff" }} />
      <Row>
        <Col className={scss.copyRight} lg={{ span: 20 }}>
          <span> © 2022 Dr. LoGo. All rights reserved by Mantine.Dev</span>
        </Col>
        <Row gutter={[12]} className={scss.social}>
          <Col>
            <AiFillFacebook />
          </Col>
          <Col>
            <AiOutlineInstagram />
          </Col>
          <Col>
            <AiFillYoutube />
          </Col>
        </Row>
      </Row>
    </div>
  );
}
