// libraries
import PropTypes from "prop-types";

// components
import { DragIcon } from "@ya.praktikum/react-developer-burger-ui-components"
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components"

// styles
import styles from "./row.module.css";

// utils
import { ingredientPropType } from "../../../utils/prop-types";



export function TopRow({ bun }) {
  return (
    <li className={styles.lockedRow}>
      <ConstructorElement
        type="top"
        isLocked={true}
        text={`${bun.name} (верх)`}
        price={bun.price}
        thumbnail={bun.image_large}
      />
    </li>
  );
};

TopRow.propTypes = PropTypes.exact(
  {
    bun: ingredientPropType.isRequired
  }
).isRequired;



export function BottomRow({ bun }) {
  return (
    <li className={styles.lockedRow}>
      <ConstructorElement
        type="bottom"
        isLocked={true}
        text={`${bun.name} (низ)`}
        price={bun.price}
        thumbnail={bun.image_large}
      />
    </li>
  );
};

BottomRow.propTypes = PropTypes.exact(
  {
    bun: ingredientPropType.isRequired
  }
).isRequired;



export function MiddleRow({ ingredient }) {
  return (
    <li className={styles.freeRow}>
      <DragIcon type="primary" />  
      <ConstructorElement
        text={ingredient.name}
        price={ingredient.price}
        thumbnail={ingredient.image_large}
        handleClose={
          event => {
            const currentRow = event.target.closest(`.${styles.freeRow}`);
            currentRow.remove();
          }
        }
      />
    </li>  
  );
};

MiddleRow.propTypes = PropTypes.exact(
  {
    ingredient: ingredientPropType.isRequired
  }
).isRequired;