import { useState, useEffect } from "react"
import { Route, Routes } from "react-router"
import { CheckSession } from "./services/Auth"
import "./App.css"
import HomePage from "./pages/HomePage"
import RegisterPage from "./pages/RegisterPage"
import LoginPage from "./pages/LoginPage"
import GameList from "./pages/GameList"
import GameDetails from "./pages/GameDetails"
import CreateGameForm from "./components/NewGame"
import Nav from "./components/Nav"

const App = () => {
  const [user, setUser] = useState({ data: null, role: null })

  const handleLogOut = () => {
    setUser({ data: null, role: null })
  }

  useEffect(() => {
    const checkToken = async () => {
      const userData = await CheckSession()
      setUser({ data: userData, role: userData.role })
    }
    checkToken()
  }, [])

  console.log(user)

  return (
    <div className="app-container">
      <div className="main-content">
        <Nav user={user.data} handleLogOut={handleLogOut} />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage setUser={setUser} />} />
            <Route path="/games" element={<GameList user={user.data} />} />
            <Route
              path="/games/:id"
              element={<GameDetails user={user.data} />}
            />
            <Route path="games/creategame" element={<CreateGameForm />} />
          </Routes>
        </main>
        <div className="footer">Wonka Land &copy; </div>
      </div>
    </div>
  )
}

export default App
