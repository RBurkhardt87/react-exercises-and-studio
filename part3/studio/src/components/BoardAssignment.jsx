import { useState } from 'react';

export default function BoardAssignment () {
   const boards = [
      {label:"Homemade Cooking", value:"Homemade Cooking Board"},
      {label:"Spicy", value:"Spicy Board"},
      {label:"Salsa", value:"Salsa Board"}

   ];
   const [boardName, setBoardName] = useState("no boards yet!");
   const handleChange = (event) => {
      setBoardName(event.target.value);
   };

   return (
      <div style={{paddingTop: "50px"}}>
      <label>Save to Board: </label>
      <select value={boardName} onChange={handleChange}>
      {boards.map((board, id) => {
        return (
          <option key={id} value={board.value}> {board.label}
          </option>
        );
      })}
      </select>

      <p>Saved to {boardName}!</p>
      </div>
   );
}
