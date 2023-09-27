// libraries
import PropTypes from "prop-types";

// components
import { Counter } from "@ya.praktikum/react-developer-burger-ui-components"
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components"

// styles
import styles from "./card.module.css";

// utils
import { ingredientPropType } from "../../../utils/prop-types";



function Card({ ingredient, count, onClick, addToCart }) {
  return (
    <div className={styles.container}>
      <figure className={styles.card} onClick={onClick}>
        <img 
          src={ingredient.image_large} 
          alt={`фото ингредиента ${ingredient.name} стоимостью ${ingredient.price}`}
          className={styles.image} 
        />
        <p className={styles.price}>
          {ingredient.price} <CurrencyIcon type="primary" />
        </p>
        <figcaption className={styles.name}>
          {ingredient.name}
        </figcaption>
      </figure>
      {count && <Counter count={count} size="default" />}
    </div>
  );
};

Card.propTypes = {
  ingredient: PropTypes.shape(ingredientPropType).isRequired,
  count: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
  addToCart: PropTypes.func.isRequired
};

export default Card;
