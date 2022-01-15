import { cardActions } from "./index";

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
      const formatedCardData = await cardData.map((card) => {
        return {
          id: card.id,
          title: card.author,
          img: card.download_url,
          cardIsLiked: false,
        };
      });
      dispatch(
        cardActions.displayAllCards({
          allCards: formatedCardData || [],
        })
      );
    } catch (error) {
      console.log(error.message);
    }
  };
};
