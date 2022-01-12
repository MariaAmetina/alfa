import LikedButton from "../LikedCards/LikedButton";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <header className={classes.header}>
      <h1>Фото</h1>
      <nav>
        <ul>
          <li>
            <LikedButton />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
