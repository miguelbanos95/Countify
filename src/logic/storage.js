export const saveBeersToStorage = ({ count }) => {
// guardar aqui el número de consumiciones
  window.localStorage.setItem('count', JSON.stringify(count))
}

export const resetGameStorage = () => {
  window.localStorage.removeItem('count')
}

export const getLocalStorage = () => {
  const data = window.localStorage.getItem('count')
  if (data !== null) {
    return JSON.parse(data)
  }
  return null
}
