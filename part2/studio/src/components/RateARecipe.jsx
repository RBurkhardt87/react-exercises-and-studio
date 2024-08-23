


let stars = ["⭐", "⭐ ⭐", "⭐ ⭐ ⭐", "⭐ ⭐ ⭐ ⭐", "⭐ ⭐ ⭐ ⭐ ⭐"];


//NOTE: you could also use destructuring and just pull the ratings right out:
// function RateARecipe({ rating })
function RateARecipe(props) {

  function GiveRating() {

    return <h3>{stars[props.rating - 1]}</h3>
  }

  //NOTE: writing a ternary that makes sure the rating is between 1-5. If it is, it will return the give rating function, if not it returns null
  return props.rating > 0 && props.rating <6 ? <GiveRating /> : null;
}

export default RateARecipe;

//conditional to render stars based on a number provided in App.js 