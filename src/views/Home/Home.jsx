import './Home_styles.css'
// import cerveza from './assets/images/cerveza.png'
import { useBloodAlcohol } from '../../hooks/useBloodAlcohol'
import { useAge } from '../../hooks/useAge'
// import users from './mocks/users.json'
import { getRandomUser } from '../../services/randomUsers'
import { useAuth } from '../../context/authContext'
// import { getRandomDrinks } from '../../services/drinks'
// import { saveBeersToStorage, resetGameStorage } from './logic/storage'
import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Suspense, useEffect, useRef, useState } from 'react'
import Beer3D from '../../components/Beer3D'

function Home() {
  // const authContext = useContext(context)
  const { user } = useAuth()


  const [count, setCount] = useState(0)
  const [randomUser, setRandomUser] = useState([])
  // const [randomBeer, setRandomBeer] = useState([])
  // const [softDrinks, setSoftDrinks] = useState({})
  const { getAlcoholemicRate } = useBloodAlcohol({ randomUser, count })
  const { getAge, age } = useAge({ randomUser })
  const canvasRef = useRef(null)

  useEffect(() => {
    setRandomUser(getRandomUser)
  }, [])

  //   useEffect(() => {
  //     getRandomDrinks()
  //       .then(response => { setSoftDrinks(response[0]) })
  //   }, [])

  /* ----------------------------------------------------------------------------------------- */
  // useEffect(() => {
  //   setRandomBeer(getRandomBeer)
  // }, [])

  /* ----------------------------------------------------------------------------------------- */
  // Pasar cm a m
  const heightInMeters = () => {
    const newHeight = randomUser.height / 100
    return newHeight
  }
  /* ----------------------------------------------------------------------------------------- */
  // Añadir/Quitar consumiciones
  const handleOnClick = () => {
    setCount((count) => count + 1)
  }
  const handleOnRest = () => {
    if (count === 0) return
    setCount((count) => count - 1)
  }
  /* ----------------------------------------------------------------------------------------- */
  // Cerrar la cuenta
  const handleOnCose = () => {
    setCount(0)
  }
  return (
    <div className='App'>
      <header>
        <h1 className='title'>Countify</h1>
      </header>
      <main>
        <div className='mainBody'>
          <div className='section-container'>
            <section className='section1'>
              <div className='canvas-container'>
                {/* <img id='mainBeer' src={softDrinks.img} alt='beer' /> */}
                <Canvas
                  className='canvas'
                  ref={canvasRef}
                  camera={{ position: [0, 10, 30], fov: 20 }}
                >
                  <OrbitControls />
                  <ambientLight intensity={0.5} />
                  <pointLight position={[10, 10, 10]} />
                  <Suspense>
                    <Beer3D />
                  </Suspense>
                </Canvas>
              </div>
              <div className='btn-main'>
                <div className={count ? 'mn-counter show' : 'mn-counter'}>{count}</div>
                <div>
                  <button className='btn-main-add' onClick={handleOnClick}>AÑADIR</button>
                </div>
                <div>
                  <button className='btn-main-close' onClick={handleOnRest}>¿Te equivocaste?</button>
                </div>
              </div>
            </section>
            <section className='section2'>
              {randomUser && (
                <div className='card mn-stadts'>
                  <div className='mn-stadts-info'>
                    <h2>Estadísticas</h2>
                    <h4>Nombre: {randomUser.first_name} {randomUser.last_name}</h4>
                    <h4>Edad: {getAge(age)}</h4>
                    <h4>Altura: {heightInMeters(randomUser.height)} m</h4>
                    <h4>Peso: {randomUser.weight} kg</h4>
                    <h4>Género: {randomUser.gender}</h4>
                  </div>
                  <div>
                    <img src={randomUser.avatar} alt='photo' />
                    <h3>Record: {count}</h3>
                  </div>
                  <div className='mn-stadts-rate'>
                    <h4>Tasa de alcoholemia (g/l): {getAlcoholemicRate}</h4>
                  </div>
                </div>
              )}
            </section>
          </div>
          <button className='btn-main-close close-count' onClick={handleOnCose}>Cerrar Cuenta</button>
        </div>
      </main>
    </div>
  )
}

export default Home
