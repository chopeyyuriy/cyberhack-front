import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { IGame } from "@/shared/types/Products/index";

export interface IGameState {
  list: IGame[];

  current: IGame | null;
}

const initialState = {
  list: [],

  current: null
};

export const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    setGameListState: (state, action: PayloadAction<IGame[]>) => {
      state.list = action.payload;
    },

    setCurrentGameState: (state, action: PayloadAction<IGame | null>) => {
      state.current = action.payload;
    }
  }
});

export const { setGameListState, setCurrentGameState } = gameSlice.actions;
export const gameReducer = gameSlice.reducer;