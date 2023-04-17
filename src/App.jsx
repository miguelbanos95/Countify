import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Suspense, useEffect, useRef, useState } from 'react'
import './App.css'
import cerveza from './assets/images/cerveza.png'
import Beer3D from './components/Beer3D'
import { useBloodAlcohol } from './hooks/useBloodAlcohol'
// import { useAge } from './hooks/useAge'
// import users from './mocks/users.json'
import { getRandomUser } from './services/randomUsers'
// import { saveBeersToStorage, resetGameStorage } from './logic/storage'

function App() {
  const [count, setCount] = useState(0)
  const [randomUser, setRandomUser] = useState([])
  const { alcoholemicRate } = useBloodAlcohol({ randomUser })
  const canvasRef = useRef(null)
  // const { age, getAge } = useAge({ randomUser })

  useEffect(() => {
    setRandomUser(getRandomUser)
  }, [])

  /* ----------------------------------------------------------------------------------------- */
  // Parsear la fecha: 30/03/2000 → 23 años
  const getAge = () => {
    const today = new Date()
    const birthdate = new Date([randomUser.date_of_birth]) // ejemplo de fecha de nacimiento
    let age = today.getFullYear() - birthdate.getFullYear()

    if (today < new Date(today.getFullYear(), birthdate.getMonth(), birthdate.getDate())) {
      age--
    }
    return age
  }
  /* ----------------------------------------------------------------------------------------- */
  // Pasar cm a m
  const heightInMeters = () => {
    const newHeight = randomUser.height / 100
    return newHeight
  }
  /* ----------------------------------------------------------------------------------------- */
  // Calcular tasa alcoholemia (hook)

  /* ----------------------------------------------------------------------------------------- */
  // Añadir consumiciones
  const handleOnClick = () => {
    setCount((count) => count + 1)
  }
  /* ----------------------------------------------------------------------------------------- */
  return (
    <div className='App'>
      <header>
        <h1>Count4-Me</h1>
      </header>
      <main>
        <section>
          <div>
            {/* <Canvas
              ref={canvasRef}
              camera={{ position: [0, 10, 30], fov: 20 }}
              style={{ width: '30vw', height: '50vh' }}>
              <OrbitControls />
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 10, 10]} />
              <Suspense>
                <Beer3D />
              </Suspense>
            </Canvas> */}
            {/* <img id='mainBeer' src={cerveza} alt='beer' /> */}
          </div>
          <div>
            {count && <div className='mn-counter'>{count}</div>}
            <div className='card'>
              <button onClick={handleOnClick}>AÑADIR</button>
            </div>
          </div>
        </section>
        <section>
          {randomUser && (
            <div className='mn-stadts'>
              <h2>Estadísticas</h2>
              <h4>Nombre: {randomUser.first_name} {randomUser.last_name}</h4>
              <h4>Edad: {getAge(randomUser.date_of_birth)}</h4>
              <h4>Altura: {heightInMeters(randomUser.height)} m</h4>
              <h4>Peso: {randomUser.weight} kg</h4>
              <h4>Género: {randomUser.gender}</h4>
            </div>
          )}
          <div>Consumiciones actuales: {count} </div>
          <div>
            <h3>Record: </h3>
            <h3>Tasa de alcoholemia (g/l): {alcoholemicRate}</h3>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
