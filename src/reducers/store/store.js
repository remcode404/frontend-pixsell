import { configureStore } from "@reduxjs/toolkit";
import gameSlice from "../Slice/GamesList";
import registration from "../Slice/registrationSlice"



export const store = configureStore({
    reducer: {
        gameSlice,
        registration
    },
  });