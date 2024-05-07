import { useState } from 'react';
import './App.css'
import BoardAssignment from './components/BoardAssignment';
import StatusChange from './components/StatusChange';
import RecipeDisplay from './components/Recipe';
import RateARecipe from '../../../part2/studio/src/components/RateARecipe';
import Button from '../../../part2/studio/src/components/Button';
import AuthorInfo from '../../../part2/studio/src/components/AuthorInfo';
import IngredientList from '../../../part2/studio/src/components/Ingredients';
import RecipeImage from '../../../part2/studio/src/components/RecipeImage';
import RecipeName from '../../../part2/studio/src/components/RecipeName';


function App() {

  return (
    <>
      <div className="App">
        <RecipeDisplay />
        <RecipeImage />
      <RecipeName />
      <RateARecipe rating={4} />
      <Button saveButton={false} />
      <AuthorInfo />
      <IngredientList />
        <div className="recipePhotoBlock">
          <BoardAssignment />
          <StatusChange />
        </div>
      </div>
    </>
  )
}

export default App
