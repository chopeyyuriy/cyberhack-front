import { createSlice } from "@reduxjs/toolkit";
import { IUpdateAccountDTO } from "../dto/index"
import type { PayloadAction } from "@reduxjs/toolkit";

export interface ISessionState {
  user: IUpdateAccountDTO | null;
}

const initialState = {
  user: null,
};

export const sessionSlice = createSlice({
  name: "session",
  initialState,
  reducers: {
    setUserState: (state, action: PayloadAction<IUpdateAccountDTO | null>) => {
      state.user = action.payload;
    }
  }
});

export const { setUserState } = sessionSlice.actions;
export const sessionReducer = sessionSlice.reducer;