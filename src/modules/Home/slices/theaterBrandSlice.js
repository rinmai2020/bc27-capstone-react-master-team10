import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import movieAPI from "apis/movieAPI";

const initialState = {
  theaterBrands: [],
  isLoading: false,
  error: "",
};
export const getTheaterBrands = createAsyncThunk(
  "home/theaterBrands/getTheaterBrands",
  async (_, { rejectWithValue }) => {
    try {
      const data = await movieAPI.getTheaterBrands();
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
const theaterBrandsSlice = createSlice({
  name: "home/theaterBrands",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getTheaterBrands.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getTheaterBrands.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.theaterBrands = payload;
    });
    builder.addCase(getTheaterBrands.rejected, (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
    });
  },
});
export default theaterBrandsSlice.reducer;
