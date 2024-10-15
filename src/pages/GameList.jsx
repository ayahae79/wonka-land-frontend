import React, { useState, useEffect } from "react"
import GameCard from "../components/GameCard"
import axios from "axios"
import { Link } from "react-router-dom"

const BASE_URL = "http://localhost:3000"

const GameList = () => {
  const [games, setGames] = useState([])
  const [selectedGame, setSelectedGame] = useState(null)

  useEffect(() => {
    getGames()
  }, [])

  const getGames = async () => {
    const response = await axios.get(`${BASE_URL}/game/games`)
    setGames(response.data)
    console.log(games)
  }
  const handleGameClick = (game) => {
    setSelectedGame(game)
  }

  return (
    <div>
      <h1>Game List</h1>
      <ul>
        {games.map((game) => (
          <Link to={`/games/${game._id}`} key={game._id}>
            <li>
              <GameCard game={game} handleGameClick={handleGameClick} />
            </li>
          </Link>
        ))}
      </ul>
    </div>
  )
}

export default GameList
