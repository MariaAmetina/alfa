import { useDispatch, useSelector } from "react-redux";

import { cardActions } from "../../store/card-slice";
import { fetchCardData } from "../../store/card-actions";
import classes from "./LikedButton.module.css";

const LikedButton = (props) => {
  const dispatch = useDispatch();
  const cardsThatLiked = useSelector((state) => state.cards.likedCards);

  const showAllCardsHandler = () => {
    dispatch(fetchCardData());
  };

  const showLikedCardsHandler = () => {
    dispatch(cardActions.showlikedCards({ allCards: cardsThatLiked }));
  };

  return (
    <button
      className={classes.button}
      onMouseDown={showLikedCardsHandler}
      onMouseUp={showAllCardsHandler}
    >
      Понравившиеся карточки
    </button>
  );
};

export default LikedButton;
