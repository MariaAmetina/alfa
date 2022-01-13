import { configureStore } from "@reduxjs/toolkit";

import cardSlice from "./card-slice";

const store = configureStore({
  reducer: { cards: cardSlice.reducer },
});

export default store;
