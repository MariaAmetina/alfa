import LikedButton from "../LikedCards/LikedButton";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <header className={classes.header}>
      <div className={classes.wrapper}>
        <h1>Фото</h1>
        <nav>
          <ul>
            <li>
              <LikedButton />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
