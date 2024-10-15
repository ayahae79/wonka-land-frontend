import React, { useState, useEffect } from 'react'
const BASE_URL = 'http://localhost:3000'
const GameDetails = ({ gameId }) => {
  const [gameDetails, setGameDetails] = useState({})
  useEffect(() => {
    const fetchGameDetails = async () => {
      try {
        const response = await fetch(`${BASE_URL}/games/${gameId}`)
        const data = await response.json()
        setGameDetails(data)
      } catch (error) {
        console.error(error)
      }
    }
    fetchGameDetails()
  }, [gameId])
  return (
    <div>
      <h1>{gameDetails.name}</h1>
      <img
        src={gameDetails.image}
        alt={gameDetails.title}
        style={{ width: '200px', height: '200px' }}
      />
      <p>Age allowed: {gameDetails.age}</p>
      <p>your Height must be: {gameDetails.height}</p>
      <p>Maximum Weight: {gameDetails.weight}</p>
      <p>
        we recomend that people who have medical issue for example:{' '}
        {gameDetails.midical_condition} to not try this game
      </p>
    </div>
  )
}

export default GameDetails
