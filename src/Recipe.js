import React from "react";
import style from "./recipe.module.css";

const Recipe = ({ title, calories, image, ingredients }) => {
  var n = 0;
  return (
    <div className={style.recipe}>
      <h1 className={style.heading}>{title}</h1>
      <div className={style.flexrow}>
        <div className={style.flexcol}>
          <img className={style.image} src={image} alt="" />
          <h3>Calories: {calories}</h3>
        </div>
        <ol className={style.ol}>
          {ingredients.map((ingredient) => (
            <li key={n++}>{ingredient.text}</li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Recipe;
