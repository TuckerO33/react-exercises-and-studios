let stars = ["⭐", "⭐ ⭐", "⭐ ⭐ ⭐", "⭐ ⭐ ⭐ ⭐", "⭐ ⭐ ⭐ ⭐ ⭐"];

function RateARecipe(props) {

function GiveRating() {
   return <h3>{stars[props.rating - 1]}</h3>;
}

// if (props.rating < 1 || props.rating > 5) {
//   return null;
// } else {
//   return <GiveRating />;
// }
  // return stars;

return (props.rating >5 || props.rating < 1) ? null: <GiveRating />

}

export default RateARecipe;

//conditional to render stars based on a number provided in App.js 
