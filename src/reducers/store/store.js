import { configureStore } from "@reduxjs/toolkit";
import gameSlice from "../Slice/GamesList";
import registration from "../Slice/registrationSlice"
import promoSclice from "../Slice/PromoSlice";

export const store = configureStore({
  reducer: {
   gameReducer: gameSlice,
   promoReducer:  promoSclice,
   registrationReducer: registration,
  },
});

