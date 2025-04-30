import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector, useStore } from "react-redux";
import searchReducer from "./slices/searchSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      search: searchReducer,
    },
  });
};

// 推斷類型
export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

// 使用withTypes語法的hooks (推薦用於Next.js App Router)
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
export const useAppStore = useStore.withTypes<AppStore>();
