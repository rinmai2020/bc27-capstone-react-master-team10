import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import movieAPI from "apis/movieAPI";

const initialState = {
  theaterShowtimes: [],
  isLoading: false,
  error: "",
};
export const getTheaterShowtimes = createAsyncThunk(
  "home/theaterShowtime/getTheaterShowtimes",
  async (theaterValue, { rejectWithValue }) => {
    try {
      const data = await movieAPI.getTheaterShowtimes(theaterValue);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
const theaterShowtimeSlice = createSlice({
  name: "home/theaterShowtime",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getTheaterShowtimes.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getTheaterShowtimes.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.theaterShowtimes = payload;
    });
    builder.addCase(getTheaterShowtimes.rejected, (state, { payload }) => {
      state.error = payload;
      state.isLoading = true;
    });
  },
});
export default theaterShowtimeSlice.reducer;
