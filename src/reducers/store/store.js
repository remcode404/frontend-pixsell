import { configureStore } from "@reduxjs/toolkit";
import gameSlice from "../Slice/GamesList";



export const store = configureStore({
    reducer: {
        gameSlice,
    },
  });