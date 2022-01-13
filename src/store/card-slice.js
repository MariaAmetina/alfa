import { createSlice } from "@reduxjs/toolkit";

const cardSlice = createSlice({
  name: "cards",
  initialState: {
    allCards: [],
  },

  reducers: {
    displayAllCards(state, action) {
      state.allCards = action.payload.allCards;
    },
    removeCard(state, action) {
      const id = action.payload;
      state.allCards = state.allCards.filter((card) => card.id !== id);
    },
  },
});

export const cardActions = cardSlice.actions;

export default cardSlice;

//этот слайс в ответе за загрузку данных с инфой о карточках и за удаление карточек
