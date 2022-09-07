import axiosClient from "./axiosClient";

const movieAPI = {
  getMovies: () => {
    return axiosClient.get("QuanLyPhim/LayDanhSachPhim", {
      params: {
        maNhom: "GP10",
      },
    });
  },

  getBanners: () => {
    return axiosClient.get("QuanLyPhim/LayDanhSachBanner");
  },

  getMovieDetails: (movieId) => {
    return axiosClient.get("QuanLyPhim/LayThongTinPhim", {
      params: {
        maPhim: movieId,
      },
    });
  },
  //Quan ly rap
  //1
  getTheaterBrands: () => {
    return axiosClient.get("QuanLyRap/LayThongTinHeThongRap", {
      params: {
        maNhom: "GP10",
      },
    });
  },
  //2
  getTheaters: (theaterValue) => {
    return axiosClient.get("QuanLyRap/LayThongTinCumRapTheoHeThong", {
      params: {
        maHeThongRap: theaterValue,
      },
    });
  },
  //3
  getTheaterShowtimes: (theaterShowtimeValue) => {
    return axiosClient.get("QuanLyRap/LayThongTinLichChieuHeThongRap", {
      params: {
        maHeThongRap: theaterShowtimeValue,
      },
    });
  },
  //4
  getMovieShowtime: (movieId) => {
    return axiosClient.get("QuanLyRap/LayThongTinLichChieuPhim", {
      params: {
        MaPhim: movieId,
      },
    });
  },
  // getInfoCinema: (cinemaId) => {
  //   return axiosClient.get("QuanLyRap/LayThongTinCumRapTheoHeThong", {
  //     params: {
  //       maHeThongRap: cinemaId,
  //     },
  //   });
  // },
  addMovie: (movie) => {
    // Đối với dữ liệu có định dạng đặc biệt như File,...
    // Ta cần phải tạo ra FormData để lưu trữ
    const formData = new FormData();
    // Duyệt qua từng thuộc tính trong object movie và thêm vào formData
    for (let key in movie) {
      formData.append(key, movie[key]);
    }
    formData.append("maNhom", "GP01");

    return axiosClient.post("QuanLyPhim/ThemPhimUploadHinh", formData);
  },
};

export default movieAPI;
