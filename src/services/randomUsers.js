import users from '../mocks/users.json'

export const getRandomUser = () => {
  const randomUser = users[Math.floor(Math.random() * users.length)]
  return randomUser
}
