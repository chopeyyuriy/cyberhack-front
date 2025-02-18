import { newsReducer } from "@/entities/News/store/index";
import { configureStore, combineReducers } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  news: newsReducer
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type NewsStore = ReturnType<typeof setupStore>

export type NewsDispatch = NewsStore['dispatch'];