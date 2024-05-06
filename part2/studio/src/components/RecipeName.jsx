import recipedata from "./recipe.json";

function RecipeName() {
  const recipeName = recipedata.map((data)=> {
    return <h1>{data.name}</h1>
  })
return <div>{recipeName}</div>
  // return recipedata;
}

export default RecipeName;

//import return the name of the recipe as a level 1 header