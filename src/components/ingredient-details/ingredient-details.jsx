// libraries
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

// components
import IngredientNutrition from "../ingredient-nutrition/ingredient-nutrition";

// styles
import styles from "./ingredient-details.module.css";

// pages 
import { ErrorPage } from "../../pages";

// selectors
import { defaultBurgerIngredientsSelector } from "../../services/selectors";



function IngredientDetails() {
  
  const { ingredientId } = useParams();
  const { availableStock } = useSelector(defaultBurgerIngredientsSelector);
  const previewableIngredient = availableStock.get(ingredientId);
  
  if (!previewableIngredient) {
    return <ErrorPage title="Что-то пошло не так!" showTips={true} />;
  };
  
  return (
    <div className={styles.container}>
      
      <figure className={styles.figure}>
        <img 
          src={previewableIngredient.image_large} 
          alt={`фото ингредиента ${previewableIngredient.name} энергетической ценностью ${previewableIngredient.calories}`}
          className={styles.image} 
        />
        <figcaption className={styles.caption}>
          {previewableIngredient.name}
        </figcaption>
      </figure>
      
      <ul className={styles.details}>
        <IngredientNutrition name="Калории, ккал" value={previewableIngredient.calories} />
        <IngredientNutrition name="Белки, г" value={previewableIngredient.proteins} />
        <IngredientNutrition name="Жиры, г" value={previewableIngredient.fat} />
        <IngredientNutrition name="Углеводы, г" value={previewableIngredient.carbohydrates} />
      </ul>
    
    </div>
  );
};

export default IngredientDetails;
