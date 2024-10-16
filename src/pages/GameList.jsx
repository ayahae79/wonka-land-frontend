
import React, { useState, useEffect } from 'react'
import GameCard from '../components/GameCard'
import axios from 'axios'
import "../css/GameList.css" // Import the CSS file for styles
const BASE_URL = 'http://localhost:3000'
import { Link } from "react-router-dom"


const GameList = ({ user }) => {
  const [games, setGames] = useState([])

  useEffect(() => {
    getGames()
  }, [])

  const getGames = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/game/games`)
      setGames(response.data)
    } catch (error) {
      console.error('Failed to fetch games:', error)

    }
  }

  return (
    <div>
      <h1 className="gamelist-title">Wonka Game</h1>
      <div className="games">
        {games.map((game) => (
          <div key={game._id}>
            <GameCard game={game} user={user} setGames={setGames} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default GameList
