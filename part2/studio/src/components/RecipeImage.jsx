import recipedata from './recipe.json';
import "./styling.css";

function RecipeImage() {

   return (
    <div>
    <img src={recipedata[1].recipeImage} alt={recipedata[1].name} className="recipeImage"/>
    </div>
   );
 };
 
 export default RecipeImage;
 
 //import json file for the data
 //apply css for className recipeImage
 