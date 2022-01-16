import { useDispatch, useSelector } from "react-redux";

import { cardActions } from "../../store";
import classes from "./LikedButton.module.css";

const LikedButton = (props) => {
  const dispatch = useDispatch();
  const allCards = useSelector((state) => state.cards.allCards);
  const cardsThatLiked = useSelector((state) => state.cards.likedCards);

  const showAllCardsHandler = (e) => {
    e.stopPropagation();
    dispatch(cardActions.displayAllCards({ allCards: allCards }));
    console.log("close");
  };

  const showLikedCardsHandler = (e) => {
    //dispatch(cardActions.showlikedCards({ allCards }));
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
