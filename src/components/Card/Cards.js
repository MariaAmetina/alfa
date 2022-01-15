import { useSelector } from "react-redux";

import SingleCard from "./SingleCard";
import classes from "./Cards.module.css";

const Cards = (props) => {
  const allCards = useSelector((state) => state.cards.allCards);

  return (
    <section className={classes.cards}>
      <ul>
        {allCards.map((card) => (
          <SingleCard
            key={card.id}
            id={card.id}
            img={card.img}
            title={card.title}
            liked={card.cardIsLiked}
          />
        ))}
      </ul>
    </section>
  );
};

export default Cards;
