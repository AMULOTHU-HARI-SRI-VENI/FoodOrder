import { Fragment } from "react";
import mealsImg from '../../assets/meals.webp';
import classes from './Header.module.css';
import HeaderCartButton from "./HeaderCartButton";
 const Header = (props) => {
    return <Fragment>
        <header className={classes.header}>
            <h1>Hari Meals</h1>
            <HeaderCartButton />
        </header>
        <div className={classes['main-image']}>
            <img src={mealsImg} alt='A table full of delicious food!' />
        </div>
    </Fragment>
 }

 export default Header;