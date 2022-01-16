import { configureStore, createSlice } from "@reduxjs/toolkit";

const cardSlice = createSlice({
  name: "cards",
  initialState: {
    allCards: [],
    likedCards: [],
    displayLiked: false,
  },

  reducers: {
    displayAllCards(state, action) {
      state.displayLiked = false;
      state.allCards = action.payload.allCards;
    },
    toggleLike(state, action) {
      const id = action.payload;
      state.allCards = state.allCards.map((card) => {
        if (card.id === id) {
          card.cardIsLiked = !card.cardIsLiked;
        }
        return card;
      });
    },
    removeCard(state, action) {
      const id = action.payload;
      state.allCards = state.allCards.filter((card) => card.id !== id);
    },
    showlikedCards(state, action) {
      const liked = action.payload.allCards;
      state.displayLiked = true;
      state.allCards = liked.filter((card) => card.cardIsLiked === true);
    },

    addCardToLiked(state, action) {
      const likedCard = action.payload;
      const existingLikedCard = state.allCards.find(
        (card) => card.cardIsLiked === true
      );
      if (existingLikedCard) {
        state.likedCards.push({
          id: likedCard.id,
          img: likedCard.img,
          title: likedCard.title,
          cardIsLiked: true,
        });
      }
    },
  },
});

export const cardActions = cardSlice.actions;

const store = configureStore({
  reducer: { cards: cardSlice.reducer },
});

export default store;
