
// import drinks from '../mocks/drinks.json'

export function useBloodAlcohol ({ count, randomUser }) {
  // const volumeBeer = drinks.volume
  const volumeBeer = 330
  // const percentDrink = drinks.percentage
  const percentDrink = 5
  const weight = randomUser.weight
  const numberOfDrinks = volumeBeer * count
  /* ----------------------------------------------------------------------------------------- */
  // Volumen de alcohol ingerido
  const volumeAlcohol = (percentDrink * numberOfDrinks) / 100
  /* ----------------------------------------------------------------------------------------- */
  // Conversión de ml a gramos de alcohol
  const mlToGramsChanged = volumeAlcohol * 0.789
  /* ----------------------------------------------------------------------------------------- */
  // Comprobar si es hombre o mujer y calcular la tasa de alcoholemia
  const checkGender = () => {
    let rate
    if (randomUser.gender === 'Male') {
      rate = 0.7
    } else if (randomUser.gender === 'Female') {
      rate = 0.6
    }
    return rate
  }
  const rate = checkGender()
  const getAlcoholemicRate = (mlToGramsChanged / (weight * rate)).toFixed(3)

  return ({ getAlcoholemicRate })
}
