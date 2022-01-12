import SingleCard from "./SingleCard";
import classes from "./Cards.module.css";

const cards = [
  {
    id: "c1",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFyP1XtJ9j4Hi4TYFk-3mEyDh6wSfKRRwQQw&usqp=CAU",
    title: "cdcscsacsa",
    liked: false,
  },
  {
    id: "c2",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFyP1XtJ9j4Hi4TYFk-3mEyDh6wSfKRRwQQw&usqp=CAU",
    title: "DCCECcdcscsacsa",
    liked: false,
  },
  {
    id: "c3",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFyP1XtJ9j4Hi4TYFk-3mEyDh6wSfKRRwQQw&usqp=CAU",
    title: "cdcscsacsa",
    liked: false,
  },
  {
    id: "c4",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFyP1XtJ9j4Hi4TYFk-3mEyDh6wSfKRRwQQw&usqp=CAU",
    title: "DCCECcdcscsacsa",
    liked: false,
  },
  {
    id: "c5",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFyP1XtJ9j4Hi4TYFk-3mEyDh6wSfKRRwQQw&usqp=CAU",
    title: "cdcscsacsa",
    liked: false,
  },
  {
    id: "c6",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFyP1XtJ9j4Hi4TYFk-3mEyDh6wSfKRRwQQw&usqp=CAU",
    title: "DCCECcdcscsacsa",
    liked: false,
  },
  {
    id: "c7",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFyP1XtJ9j4Hi4TYFk-3mEyDh6wSfKRRwQQw&usqp=CAU",
    title: "cdcscsacsa",
    liked: false,
  },
  {
    id: "c8",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFyP1XtJ9j4Hi4TYFk-3mEyDh6wSfKRRwQQw&usqp=CAU",
    title: "DCCECcdcscsacsa",
    liked: false,
  },
  {
    id: "c9",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFyP1XtJ9j4Hi4TYFk-3mEyDh6wSfKRRwQQw&usqp=CAU",
    title: "DCCECcdcscsacsa",
    liked: false,
  },
];

const Cards = (props) => {
  return (
    <section className={classes.cards}>
      <ul>
        {cards.map((card) => (
          <SingleCard
            key={card.id}
            id={card.id}
            img={card.img}
            title={card.title}
          />
        ))}
      </ul>
    </section>
  );
};

export default Cards;
