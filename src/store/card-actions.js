import { cardActions } from "./card-slice";

export const fetchCardData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch("https://picsum.photos/v2/list");

      if (!response.ok) {
        throw new Error("Could not fetch cards data!");
      }

      const data = await response.json();

      return data;
    };

    try {
      const cardData = await fetchData();

      const local = localStorage.getItem("persist:root");
      const allCards = JSON.parse(JSON.parse(local).cards).allCards;

      const newFormatedData = await cardData.map((card) => {
        return {
          id: card.id,
          title: card.author,
          img: card.download_url,
          cardIsLiked: false,
        };
      });

      const dataToDisplay = newFormatedData.map((card) => {
        if (allCards.length > 0) {
          for (let i = 0; i < allCards.length; i++) {
            card =
              allCards[i] !== null && card.id === allCards[i].id
                ? allCards[i]
                : card;
          }
        }
        return card;
      });

      dispatch(
        cardActions.displayAllCards({
          allCards: dataToDisplay || [],
        })
      );
    } catch (error) {
      console.log(error.message);
    }
  };
};
