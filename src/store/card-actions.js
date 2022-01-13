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
      console.log(cardData);
      dispatch(
        cardActions.displayAllCards({
          allCards: cardData || [],
        })
      );
    } catch (error) {
      console.log(error.message);
    }
  };
};
