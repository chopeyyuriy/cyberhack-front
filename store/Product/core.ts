import { gameReducer } from "@/entities/Game/store/index";
import { configureStore, combineReducers } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  game: gameReducer
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type ProductStore = ReturnType<typeof setupStore>

export type ProductDispatch = ProductStore['dispatch'];