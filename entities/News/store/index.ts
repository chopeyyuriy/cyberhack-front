import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  data: null,
};

export const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    setNewsDataState: (state, action: PayloadAction<any>) => {
      state.data = action.payload;
    }
  }
});

export const { setNewsDataState } = newsSlice.actions;
export const newsReducer = newsSlice.reducer;