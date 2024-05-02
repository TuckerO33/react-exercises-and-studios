import styles from './Description.module.css';
import React from 'react';
function RecipeAuthor() {
    let authorLink = 'https://www.savoryexperiments.com/';
    let authorPhoto = 'https://www.savoryexperiments.com/wp-content/uploads/2022/09/Jessica-Formicola-Headshot-800x500.jpg';
    let authorName = 'Jessica Formicola';
    return (
        <div className = {styles.recipeAuthorBlock}>
           <img src={authorPhoto} alt = "Reasonable alt text" className={styles.imageUpdates} />
           <div>
              <h3>{authorName}</h3>
              <a href={authorLink}>Savory Experiments</a> 
           </div>
        </div>
     );

}

class RecipeDescription extends React.Component {
    render() {
        return(
        <div> 
            <div>
                <h1>Tomato Rice</h1>
                <p>It's rice with Tomato in it!!!!!</p>
            </div>
            <RecipeAuthor />
        </div>
         );
    }
}
export default RecipeDescription;