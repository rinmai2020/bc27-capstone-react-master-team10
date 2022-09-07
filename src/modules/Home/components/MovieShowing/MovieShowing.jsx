import { useNavigate } from "react-router-dom";
import { Modal, Typography, Button } from "antd";
import { BsPlayCircle } from "react-icons/bs";
import useRequest from "hooks/useRequest";
import movieAPI from "apis/movieAPI";
import { Card, Col, Row } from "antd";
import { useState } from "react";
import scss from "./MovieShowing.module.scss";

const { Paragraph, Text } = Typography;
const { Meta } = Card;
const MovieShowing = () => {
  // useNavigate là một hook dùng để điều hướng url
  const navigate = useNavigate();

  const {
    data: movies,
    isLoading,
    error,
  } = useRequest(() => movieAPI.getMovies());

  const goToMovie = (movieId) => {
    navigate(`/movie/${movieId}`);
  };
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [ellipsis, setEllipsis] = useState(false);
  const handleEl = () => setEllipsis(true);
  const showModal = () => {
    setIsModalOpen(true);
    console.log(setIsModalOpen(true));
  };
  const [isShown, setIsShown] = useState(true);
  const handleEnter = (e) => {
    setIsShown(false);
  };
  const handleLeave = () => {
    setIsShown(true);
    // e.target.style.display = "block";
  };
  return (
    <div className="container py-5 ">
      <Row gutter={[24, 24]}>
        {movies?.map((movie) => {
          return (
            <Col
              key={movie.maPhim}
              xs={{ span: 24 }}
              sm={{ span: 24 }}
              md={{ span: 12 }}
              lg={{ span: 8 }}
              xl={{ span: 6 }}
            >
              <Card
                className={scss.Card}
                hoverable
                cover={
                  <img
                    onClick={showModal}
                    className={scss.hoverImg}
                    alt="Modern Design"
                    src={movie.hinhAnh}
                  />
                }
              >
                <div className="ant-card-body p-0">
                  <div className="  d-flex align-items-center mb-2">
                    <span className={scss.maPhim}>{movie.maPhim}</span>
                    <span className={scss.tenPhim}>{movie.tenPhim}</span>
                  </div>
                  <Paragraph>
                    {movie.moTa.length > 100
                      ? movie.moTa.substring(0, 30) + "..."
                      : movie.moTa}
                  </Paragraph>
                </div>
                <BsPlayCircle className={scss.iconPlay} />
                <Button
                  // onMouseEnter={handleEnter}
                  // onMouseLeave={handleLeave}
                  block
                  type="primary"
                  danger
                  onClick={() => goToMovie(movie.maPhim)}
                >
                  Mua Vé
                </Button>
              </Card>

              <Modal
                title="Basic Modal"
                centered
                open={isModalOpen}
                // open={open}
                // onOk={() => setOpen(false)}
                // onCancel={() => setOpen(false)}
                // width={1000}
              >
                <iframe
                  width={885}
                  height={498}
                  src="https://www.youtube.com/embed/sTJfJoaZrCw"
                  title="The Imperfects | Official Trailer | Netflix"
                  frameBorder={0}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </Modal>
            </Col>

            // {/* <Col key={movie.maPhim}>
            //   <span>{movie.tenPhim}</span>
            //   <button onClick={() => goToMovie(movie.maPhim)}>
            //     Chi tiết
            //   </button>
            // </Col> */}
          );
        })}
      </Row>
    </div>
  );
};

export default MovieShowing;
