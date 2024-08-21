import styles from './components/Description.module.css'

export default function RecipePhoto() {
    const recipeImage = "https://messinthekitchen.com/wp-content/uploads/2021/05/one-pot-mediterranean-chicken-and-rice-1.jpg";
    
    return  <img src={recipeImage} alt="Chicken and Rice Skillet" className = {styles.imageUpdates} />
};

