import { configureStore } from "@reduxjs/toolkit";
import authSlice from "modules/Authentication/slices/authSlice";
import theaterBrandSlice from "modules/Home/slices/theaterBrandSlice";
import theaterShowtimeSlice from "modules/Home/slices/theaterShowtimeSlice";

import theatersSlice from "modules/Home/slices/theatersSlice";

const store = configureStore({
  reducer: {
    auth: authSlice,
    theaterBrand: theaterBrandSlice,
    theaterShowtime: theaterShowtimeSlice,
    theater: theatersSlice,
  },
});

export default store;
