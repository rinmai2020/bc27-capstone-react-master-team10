import React from "react";
import { Rate, Progress } from "antd";

import useRequest from "hooks/useRequest";
import movieAPI from "apis/movieAPI";
import { Card, Col, Row, Button } from "antd";
import scss from "./Over.module.scss";
const { Meta } = Card;
const Overview = ({ movieId }) => {
  const {
    data: movie,
    isLoading,
    error,
  } = useRequest(() => movieAPI.getMovieDetails(movieId));

  if (!movie) {
    return null;
  }

  return (
    <div className="container" style={{ marginTop: 120 }}>
      <Row
        gutter={[24, 24]}
        className="d-flex align-items-center justify-content-between"
      >
        <Col className={scss.card} md={{ span: 14 }} lg={{ span: 14 }}>
          <div className={scss.images}>
            <img className={scss.img} alt="example" src={movie.hinhAnh} />
          </div>
          <div className={scss.info}>
            <p>{movie.ngayKhoiChieu}</p>
            <h3>{movie.tenPhim}</h3>
            <Button
              // onMouseEnter={handleEnter}
              // onMouseLeave={handleLeave}
              block
              type="primary"
              danger
            >
              Mua Vé
            </Button>
          </div>
        </Col>
        <Col
          md={{ span: 10 }}
          className="d-flex flex-column justify-content-end"
        >
          <Progress
            type="circle"
            strokeColor={{
              "0%": "#108ee9",
              "100%": "#87d068",
            }}
            percent={100}
            format={() => <span className="fs-1 fw-bold ">10</span>}
          />
          <Rate allowHalf defaultValue={movie.danhGia} />
        </Col>
      </Row>
    </div>
  );
};

export default Overview;
{
  /* <div>
      <h1>{movie.tenPhim}</h1>
    </div> */
}
