import { useState } from 'react'

export function useAge ({ randomUser }) {
  const [age, setAge] = useState(0)

  const getAge = () => {
    const today = new Date()
    const birthdate = new Date([randomUser.date_of_birth]) // ejemplo de fecha de nacimiento
    let age = today.getFullYear() - birthdate.getFullYear()

    if (today < new Date(today.getFullYear(), birthdate.getMonth(), birthdate.getDate())) {
      age--
    }
    return age
  }

  return ({ age, getAge })
}
