import baseApi from "@/utils/api";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { loadingSet } from "./loading";

const inventarisSlice = createSlice({
  name: "inventaris",
  initialState: {
    data: [],
  },
  reducers: {
    inventaristSet: (state, action) => ({
      ...state,
      data: action.payload ?? [],
    }),
  },
});

export const { inventaristSet } = inventarisSlice.actions;

export const inventarisGet = createAsyncThunk(
  "inventaris/fetch",
  async (_, { dispatch }) => {
    dispatch(loadingSet(true));
    return baseApi
      .get("/alat")
      .then((data) => {
        console.log(data);
        dispatch(inventaristSet(data));
      })
      .catch((err) => {
        console.log(err.message);
      })
      .finally(() => dispatch(loadingSet(false)));
  }
);

export default inventarisSlice.reducer;
