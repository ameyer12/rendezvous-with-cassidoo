/* Given an array of objects representing ingredients (each with a name and amount per serving), 
and a target number of servings, write a function to calculate the required amount of each ingredient for the target servings. 
Return the results as an array of objects with name and amount. */

function calculateIngredients(ingredients, targetServings) {
  for (let i = 0; i < ingredients.length; i++){
    ingredients[i]["amount"] = ingredients[i]["amount"] * targetServings;
  }
  return ingredients;
}

const ingredients = [
  { name: "flour", amount: 200 }, // 200g per
  { name: "sugar", amount: 100 }, // 100g per
  { name: "eggs", amount: 2 }     // 2 eggs per
];
const targetServings = 3;

console.log(calculateIngredients(ingredients, targetServings));