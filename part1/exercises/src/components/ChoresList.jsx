
import classes from './ChoresList.module.css';

export default function ChoresList () {
   return (
      <>
      <h3 className= {classes.choresText}>Chores List</h3>
      
      <ol className={classes.choresHeading}>
         <li>Get Miles ready for school</li>
         <li>Get laundry washed/folded</li>
         <li>Meal prep for the week</li>
         <li>Do some homework done</li>   
      </ol>  
      
      </>
   )
   
      
}