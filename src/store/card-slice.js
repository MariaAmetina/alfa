import { createSlice } from "@reduxjs/toolkit";

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
    removeCard(state, action) {
      const id = action.payload;
      state.allCards = state.allCards.filter((card) => card.id !== id);
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
    showlikedCards(state, action) {
      const liked = action.payload.allCards;
      state.displayLiked = true;
      state.allCards = liked.filter((card) => card.cardIsLiked === true);
    },
    addCardToLiked(state, action) {
      const newLikedCard = action.payload;
      const likedCard = state.allCards.find(
        (card) => card.id === newLikedCard.id && card.cardIsLiked === true
      );
      const includedLikedCard = state.likedCards.find(
        (card) => card.id === newLikedCard.id && card.cardIsLiked === true
      );
      if (likedCard && !includedLikedCard) {
        state.likedCards.push({
          id: newLikedCard.id,
          img: newLikedCard.img,
          title: newLikedCard.title,
          cardIsLiked: true,
        });
      } else {
        includedLikedCard.cardIsLiked = false;
        state.likedCards = state.likedCards.filter(
          (card) => card.id !== newLikedCard.id
        );
      }
    },
  },
});

export const cardActions = cardSlice.actions;

export default cardSlice;
