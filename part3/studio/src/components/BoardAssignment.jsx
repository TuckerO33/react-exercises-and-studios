import { useState } from 'react';

export default function BoardAssignment () {
   const boards = [
      {
         label: "Noodles",
         value:"",
      },
      {
         label: "Easy",
         value:"",
      },
      {
         label: "Cheesey",
         value:"",
      },
   ];
   let [boardName, setName] = useState('No boards yet!')

   const handleChange = (event) => {
      setName(boardName = event.target.value)
   }

   return (
      <div style={{paddingTop: "50px"}}>
      <label>Save to Board: </label>
      <select value={boardName} onChange={handleChange}>
         {boards.map((item, index) => {
            return (
               <option value={item.label}>{item.label}</option>
            )
         })}
      </select>

      <p>Saved to {boardName}!</p>
      </div>
   );
}
