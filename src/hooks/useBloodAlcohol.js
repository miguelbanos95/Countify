import drinks from '../mocks/drinks.json'

export function useBloodAlcohol ({ randomUser }) {
  const MenRate = 0.7
  //   const WomenRate = 0.6
  //   const volumeBeer = drinks.volume
  const volumeBeer = 330
  //   const percentDrink = drinks.percentage
  const percentDrink = 5
  //   const weight = randomUser.weight
  const weight = 70
  /* ----------------------------------------------------------------------------------------- */
  const volumeAlcohol = (percentDrink * volumeBeer) / 100
  /* ----------------------------------------------------------------------------------------- */
  const mlToGramsChanged = volumeAlcohol * 100
  /* ----------------------------------------------------------------------------------------- */
  const alcoholemicRate = mlToGramsChanged / (weight * MenRate)

  return ({ alcoholemicRate })
}
