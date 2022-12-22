import { configureStore } from "@reduxjs/toolkit";
import gameSlice from "../Slice/GamesList";
import promoSclice from "../Slice/PromoSlice";

export const store = configureStore({
  reducer: {
   gameReducer: gameSlice,
   promoReducer:  promoSclice,
  },
});
