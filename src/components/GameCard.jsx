import React from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import "../css/GameCard.css"

const BASE_URL = "http://localhost:3000"

const GameCard = ({ game, user, setGames }) => {
  const navigate = useNavigate()
  const isAdmin = user && user.role === "admin"

  const handleGameDelete = async (gameId) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this game?"
    )
    if (!confirmDelete) return

    try {
      const response = await axios.delete(`${BASE_URL}/game/games/${gameId}`)
      if (response.status === 200) {
        // Update the state to remove the deleted game
        setGames((prevGames) => prevGames.filter((g) => g._id !== gameId))
        console.log("Game deleted successfully:", gameId)
      }
    } catch (error) {
      console.error(
        "Failed to delete the game:",
        error.response ? error.response.data : error.message
      )
    }
  }

  const handleViewDetails = (gameId) => {
    navigate(`/games/${gameId}`)
  }

  return (
    <div className="game-card-container">
      <div className="game-card">
        <img src={game.image} alt={game.name} className="game-image" />
        <h2>{game.name}</h2>
        <div className="button-list">
          {isAdmin && (
            <button
              onClick={() => handleGameDelete(game._id)}
              className="delete-button"
            >
              Delete
            </button>
          )}
          <button
            className="custom-btn"
            onClick={() => handleViewDetails(game._id)}
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  )
}

export default GameCard
