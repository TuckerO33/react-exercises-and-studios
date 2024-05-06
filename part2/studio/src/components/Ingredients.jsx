import recipedata from "./recipe.json"
function IngredientList() {
  const ingredients = recipedata[0].ingredients;
  const ingredientsJSX = ingredients.map((ingredient, idx) => {
    return (<li key={idx}> {ingredient}</li>);
  });
  return (
    <div>
      <h3>Ingredients</h3>
      <ul>
        {ingredientsJSX}
      </ul>
    </div>
  )
 
 }
 
 export default IngredientList;
 
//import json file for the data
//use a nested map to get inside the inner array
 