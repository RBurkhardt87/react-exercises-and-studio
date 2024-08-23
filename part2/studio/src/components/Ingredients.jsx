import recipedata from './recipe.json'


function IngredientList() {

  //NOTE: create a variable to hold all the JSX that's created by the mapping. 
  //recipedata[1].ingredients is the array that we are going to map over. 
  //any time you are mapping to create JSX with React you are required to use a key. If it doesn't have a unique id, we will use . We can access it and use it as the id

  let ingredientsJSX = recipedata[1].ingredients.map((ingredient, index) => {
    return <li key={index}>{ingredient}</li>;
  });
  
  
  return (
    <div>
      <h3>Ingredients</h3>
      <ul>
        {ingredientsJSX}
      </ul>      
    </div>


   );
 }
 
 export default IngredientList;
 
//import json file for the data
//use a nested map to get inside the inner array
 