import { useState } from 'react'

export function useAge ({ randomUser }) {
  const [age, setAge] = useState(null)
  const newAge = randomUser.date_of_birth

  const getAge = () => {
    const today = new Date()
    const birthdate = new Date(newAge)
    let age = today.getFullYear() - birthdate.getFullYear()

    if (today < new Date(today.getFullYear(), birthdate.getMonth(), birthdate.getDate())) {
      age--
    }
    return age
  }

  return { newAge: age, getAge }
}
