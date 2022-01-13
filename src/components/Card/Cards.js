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
            img={card.download_url}
            title={card.author}
          />
        ))}
      </ul>
    </section>
  );
};

export default Cards;
