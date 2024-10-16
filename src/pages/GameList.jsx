import React, { useState, useEffect } from 'react'
import GameCard from '../components/GameCard'
import axios from 'axios'
import { Link } from 'react-router-dom'

const BASE_URL = 'http://localhost:3000'

const GameList = () => {
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

  const handleGameDelete = async (gameId) => {
    const confirmDelete = window.confirm(
      'Are you sure you want to delete this game?'
    )
    if (!confirmDelete) return

    console.log('Attempting to delete game with ID:', gameId)

    try {
      const response = await axios.delete(`${BASE_URL}/game/games/${gameId}`)
      console.log('Delete response:', response)
      if (response.status === 200) {
        console.log('Current games:', games)
        setGames((prevGames) => {
          const updatedGames = prevGames.filter((game) => game._id !== gameId)
          console.log('Updated games after deletion:', updatedGames)
          return updatedGames
        })
        console.log('Game deleted successfully:', gameId)
      }
    } catch (error) {
      console.error(
        'Failed to delete the game:',
        error.response ? error.response.data : error.message
      )
    }
  }

  return (
    <div>
      <h1>Game List</h1>
      <ul>
        {games.map((game) => (
          <li key={game._id}>
            <GameCard game={game} />
            <button
              onClick={() => handleGameDelete(game._id)}
              style={{ marginLeft: '10px', float: 'right' }}
            >
              Delete
            </button>
            <Link to={`/games/${game._id}`}>
              <button style={{ marginLeft: '10px' }}>View Details</button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default GameList
