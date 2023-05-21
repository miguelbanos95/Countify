import './App.css'
// import cerveza from './assets/images/cerveza.png'
import { Routes, Route } from 'react-router-dom'
import Home from './views/Home/Home'
import Register from './views/Register/Register'
import Login from './views/Login/Login'
import { useEffect, useState } from 'react'
import LoadingScreen from './components/misc/LoadingScreen'
import { AuthProvider } from './context/authContext'


function App() {
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
          <AuthProvider>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/register' element={<Register />} />
              <Route path='/login' element={<Login />} />
            </Routes>
          </AuthProvider>)}
    </div>
  )
}

export default App
