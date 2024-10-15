import React, { useState, useEffect } from 'react'
import GameCard from '../components/GameCard'

const BASE_URL = 'http://localhost:3000'

const GameList = () => {
  const [games, setGames] = useState([])
  const [selectedGame, setSelectedGame] = useState(null)

  useEffect(() => {
    fetch(`${BASE_URL}/games`)
      .then((response) => response.send())
      .then((data) => {
        setGames(data)
      })
      .catch((error) => {
        console.error(error)
      })
  }, [])

  const handleGameClick = (game) => {
    setSelectedGame(game)
  }

  return (
    <div>
      <h1>Game List</h1>
      <ul>
        {games.map((game) => (
          <li key={game._id}>
            <GameCard game={game} onClick={handleGameClick} />
          </li>
        ))}
      </ul>
      {selectedGame && <GameDetails game={selectedGame} />}
    </div>
  )
}

export default GameList
