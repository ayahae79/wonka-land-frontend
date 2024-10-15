import axios from "axios"
import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

const BASE_URL = "http://localhost:3000"

const GameDetails = () => {
  const { id } = useParams()
  const [gameDetails, setGameDetails] = useState({})

  useEffect(() => {
    const fetchGameDetails = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/game/games/${id}`)
        const data = response.data
        console.log(data)
        setGameDetails(data)
      } catch (error) {
        console.error(error)
      }
    }
    fetchGameDetails()
  }, [id])

  return (
    <div className="game-details-container">
      <div className="game-header">
        <h1 className="game-name">{gameDetails.name}</h1>
      </div>
      <div className="game-content">
        <div className="game-image-wrap">
          <img
            src={gameDetails.image}
            alt={gameDetails.title}
            className="game-image-details"
          />
        </div>
        <div className="game-info-wrap">
          <div className="info-section">
            <h3>Get Ready for Adventure!</h3>
            <ul>
              <li>
                <span class="material-symbols-outlined">person_check</span>
                Age allowed: {gameDetails.age}
              </li>
              <li>
                <span className="material-icons">height</span> your Height must
                be: {gameDetails.height}
              </li>
              <li>
                <span class="material-symbols-outlined">
                  monitor_weight_gain
                </span>
                Maximum Weight: {gameDetails.weight}
              </li>
              <h3>Important Notes</h3>
              <li>
                <span className="material-icons ">local_hospital</span>
                <p>
                  we recomend that people who have medical issue for example:
                  {gameDetails.midical_condition} to not try this game
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GameDetails
