
// src/components/GameCard.jsx
import React from "react"
import { Link, useNavigate } from "react-router-dom"

const GameCard = ({ game, user }) => {
  const navigate = useNavigate()
  const isAdmin = user && user.role === "admin"

  const handleGameDelete = async (gameId) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this game?"
    )
    if (!confirmDelete) return

    console.log("Attempting to delete game with ID:", gameId)

    try {
      const response = await axios.delete(`${BASE_URL}/game/games/${gameId}`)
      console.log("Delete response:", response)
      if (response.status === 200) {
        console.log("Current games:", games)
        setGames((prevGames) => {
          const updatedGames = prevGames.filter((game) => game._id !== gameId)
          console.log("Updated games after deletion:", updatedGames)
          return updatedGames
        })
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
            <button onClick={() => handleGameDelete(game._id)}>Delete</button>
          )}
          <button onClick={() => handleViewDetails(game._id)}>
            View Details
          </button>
        </div>
      </div>

    </div>
  );
};

export default GameCard;
