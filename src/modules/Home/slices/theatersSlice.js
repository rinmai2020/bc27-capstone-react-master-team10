import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import movieAPI from "apis/movieAPI";

const initialState = {
  theaters: [],
  isLoading: false,
  error: "",
};
export const getTheaters = createAsyncThunk(
  "home/theaters/getTheaters",
  async (params, { rejectWithValue }) => {
    try {
      const data = await movieAPI.getTheaters(params);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
const theatersSlice = createSlice({
  name: "home/theaters",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getTheaters.pending, (state) => {
      state.isLoading = false;
    });
    builder.addCase(getTheaters.fulfilled, (state, { payload }) => {
      state.theaters = payload;
      state.isLoading = false;
    });
    builder.addCase(getTheaters.rejected, (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
    });
  },
});
export default theatersSlice.reducer;
