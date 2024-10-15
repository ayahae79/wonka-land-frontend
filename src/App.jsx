// src/App.jsx
import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router'
import './App.css'
import HomePage from './components/HomePage'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import GameList from './pages/GameList'
import GameDetails from './pages/GameDetails'
import CreateGameForm from './components/NewGame'
import { CheckSession } from './services/Auth'

const App = () => {
  const [user, setUser] = useState(null)

  const handleLogOut = () => {
    setUser(null)
    localStorage.clear()
  }

  const checkToken = async () => {
    const user = await CheckSession()
    setUser(user)
  }

  useEffect(() => {
    const token = localStorage.getItem('token')

    if (token) {
      checkToken()
    }
  }, [])

  return (
    <div className="app-container">
      <div className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage setUser={setUser} />} />
          <Route path="/games" element={<GameList />} />
          <Route path="/games/:Id" element={<GameDetails />} />
          <Route path="/games/creategame" element={<CreateGameForm />} />
        </Routes>
      </div>
      <div className="footer">Wonka Land &copy; </div>
    </div>
  )
}

export default App
