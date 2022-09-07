// import { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { getBanners } from "../../slices/bannerSlice";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import useRequest from "hooks/useRequest";
import movieAPI from "apis/movieAPI";
import { Carousel } from "antd";
const TRAILERS = [
  "https://www.youtube.com/watch?v=TOFxa0w_gAo",
  "https://www.youtube.com/watch?v=TOFxa0w_gAo",
  "https://www.youtube.com/watch?v=TOFxa0w_gAo",
];

const Banner = () => {
  // const dispatch = useDispatch();
  // const { banners, isLoading, error } = useSelector((state) => state.banner);
  // useEffect(() => {
  //   dispatch(getBanners());
  // }, []);

  const {
    data: banners,
    isLoading,
    error,
  } = useRequest(() => movieAPI.getBanners());

  const bannersMapped = banners?.map((banner, index) => {
    return { ...banner, trailer: TRAILERS[index] };
  });

  // console.log(bannersMapped);
  // autoplay
  return (
    <>
      <Swiper
        loop={true}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {bannersMapped?.map((banner) => {
          return (
            <SwiperSlide>
              <img
                key={banner.maBanner}
                src={banner.hinhAnh}
                alt={`banner-${banner.maBanner}`}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default Banner;
// {
//   /* <div className={scss.heroBlock}>
//       <Carousel>
//         {bannersMapped?.map((banner) => {
//           return (
//             <img
//               key={banner.maBanner}
//               src={banner.hinhAnh}
//               alt={`banner-${banner.maBanner}`}
//             />
//           );
//         })}
//       </Carousel>
//     </div> */
// }
