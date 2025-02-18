import { gameReducer } from "@/entities/Game/store/index";
import { sessionReducer } from "@/entities/Session/store/index";
import { configureStore, combineReducers } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  session: sessionReducer,
  game: gameReducer
});
export const setupStore = () => {
  return configureStore({
    reducer: rootReducer
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>

export type AppDispatch = AppStore['dispatch'];