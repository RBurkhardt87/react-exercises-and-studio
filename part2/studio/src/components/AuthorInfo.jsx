import recipedata from "./recipe.json";
import "./styling.css";

function AuthorInfo() {

  const recipeAuthor = <div>{recipedata[1].author}</div>
  const recipeAuthorImage = <img className="authorImage" alt={recipedata[1].author} src={recipedata[1].authorImage} />;

  let url = recipedata[1].website;
  const recipeWebsite = <a href={url} target="_blank">{url}</a>
  

   return (
    
      <div>
         {recipeAuthorImage}
         {recipeAuthor}
         {recipeWebsite}
      </div>
   );

  
 }
 
 export default AuthorInfo;
 
 //import styles.css
 //import json file for author info
 //image, name, website
 //css for styling image
 