
import styles from './Description.module.css';
import React from 'react';


function RecipeAuthor() {
    const authorLink = "https://messinthekitchen.com/one-pot-mediterranean-chicken-and-rice/";
    const authorPhoto = "https://messinthekitchen.com/wp-content/uploads/2021/03/ap-pfp-360x361.jpg";
    const authorName = "Nicole Beaulieu";
        
        return (
            <div className = {styles.recipeAuthorBlock}>
               <img src={authorPhoto} 
                alt = "Nicole Beaulieu Profile Picture" 
                className={styles.imageUpdates} />
               <div>
                  <h3>{authorName}</h3>
                  <a href={authorLink}>Mess in the Kitchen</a> 
               </div>
            </div>
         );
           
};




//You could write the function as....
// const RecipeAuthor = () => {}   this is written as arrow function instead.
 



export default class RecipeDescription extends React.Component {
    render () {
        return (
            <div> 
            <div>
                <h1>One Pot Mediterranean Chicken and Rice</h1>
                <p>Save time (and dishes) with this one pot recipe. This fast and easy dish will be sure to please the whole family. It uses fresh Parsley and lemon to lighten and brighten your dinner table. It takes only 30 minutes to marinade and prep this dish. And in the oven it goes for another 50 minutes-- giving you the perfect amount of time to relax after work or even help the kiddos with some homework before dinner.  </p>
            </div>
            <RecipeAuthor />
            </div>
        );
    };
};




