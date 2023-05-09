import { Fragment } from "react";
import mealsImage from "../../Assets/meals.jpg";
import classes from "./Header.modules.css";
import HeaderCartButton from "./HeaderCartButton";
const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>React Meals</h1>
        <HeaderCartButton onClick={props.showCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="A table of full of delious food!" />
      </div>
    </Fragment>
  );
};
export default Header;
