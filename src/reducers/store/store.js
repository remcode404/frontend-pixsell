import { configureStore } from "@reduxjs/toolkit";
import gameSlice from "../Slice/GamesList";
import vacancySlice from "../Slice/vacancySlice";



export const store = configureStore({
    reducer: {
        gameSlice,
        vacancySlice,
    },
  });