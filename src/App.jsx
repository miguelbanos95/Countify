import './App.css'
// import cerveza from './assets/images/cerveza.png'
import { Routes, Route } from 'react-router-dom'
import Home from './views/Home/Home'
import Register from './views/Register/Register'
import { useEffect, useState } from 'react'
import LoadingScreen from './components/misc/LoadingScreen'

function App () {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 2500)
  }, [])

  return (
    <div className='App'>
      {loading
        ? (
          <LoadingScreen />)
        : (
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/register' element={<Register />} />
          </Routes>)}
    </div>
  )
}

export default App
