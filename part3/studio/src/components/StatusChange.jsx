import { useState } from 'react';

export default function StatusChange () {

   let [notes, SetNotes] = useState("")
   let [recipeStatus, SetRecipeStatus] = useState(false)
   const handleChange = (event) => {
      SetNotes(notes = event.target.value)

   }

   const handleSubmit = (event) => {
      event.preventDefault();
      SetRecipeStatus(recipeStatus = true);
   }

   return (
      <div style={{paddingTop: "50px"}}>
         <form onSubmit={handleSubmit}>
            <label>Have you tried this recipe? Add your notes here: <input type="text" value={notes} onChange={handleChange} />
            </label>
            <input type="submit" />
         </form>
         {(recipeStatus) ? notes : <div>
         <p>My Recipe Notes aren't here!</p>

         <p>I have not tried this recipe!</p>
      </div>}
      </div>
   );
}
