import recipedata from "./recipe.json";

function RecipeImage() {
  const {recipeImage, name} = recipedata[0];

   return (<div>
    <img src={recipeImage} alt={name} className="recipeImage" />
   </div>)
 }
 
 export default RecipeImage;
 
 //import json file for the data
 //apply css for className recipeImage
 