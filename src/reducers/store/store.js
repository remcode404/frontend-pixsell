import { configureStore } from "@reduxjs/toolkit";
import gameSlice from "../Slice/GamesList";
// import cartSlice from "../Slice/basketSlice";

export const store = configureStore({
  reducer: {
    gameSlice,
    // cartSlice,
  },
});
