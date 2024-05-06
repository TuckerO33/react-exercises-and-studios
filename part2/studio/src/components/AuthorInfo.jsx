import recipeData from "./recipe.json"
function AuthorInfo() {
    const authorImage = recipeData[0].authorImage
    const recipeAuthor = recipeData[0].author
    const recipeAuthorImage = <img src={authorImage} alt={recipeAuthor} className="authorImage" />
    const recipeWebsite = <a href={recipeData[0].website}>  Her Website!!!!!!</a>
    return (
      <div>
         {recipeAuthorImage}
         {recipeAuthor}
         <br/>
         {recipeWebsite}
      </div>
   );

 }
 
 export default AuthorInfo;
 
 //import styles.css
 //import json file for author info
 //image, name, website
 //css for styling image
 