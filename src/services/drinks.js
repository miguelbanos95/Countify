
export const getRandomDrinks = async () => {
  const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
  const data = await response.json()
  const drinks = data.drinks

  const mappedSoftDrinks = drinks?.map(drink => ({
    id: drink.idDrink,
    name: drink.strDrink,
    drinkAlternate: drink.strDrinkAlternate,
    tags: drink.strTags,
    video: drink.strVideo,
    category: drink.strCategory,
    strIBA: drink.strIBA,
    alcoholic: drink.strAlcoholic,
    strGlass: drink.strGlass,
    instructions: drink.strInstructions,
    instructionsES: drink.strInstructionsES,
    instructionsDE: drink.strInstructionsDE,
    instructionsFR: drink.strInstructionsFR,
    instructionsIT: drink.strInstructionsIT,
    img: drink.strDrinkThumb,
    ingredient1: drink.strIngredient1,
    ingredient2: drink.strIngredient2,
    ingredient3: drink.strIngredient3,
    volume: drink.strMeasure1,
    volume2: drink.strMeasure2

  }))
  return mappedSoftDrinks
}

export const getRandomBeer = async () => {
  const response = await fetch('https://random-data-api.com/api/v2/beers')
  const data = await response.json()
  const randomBeer = data
  return randomBeer
}
