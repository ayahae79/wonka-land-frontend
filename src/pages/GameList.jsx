import React, { useState, useEffect } from "react";
import GameCard from "../components/GameCard";
import axios from "axios";
import { Link } from "react-router-dom";
import "../css/GameList.css" // Import the CSS file for styles

const BASE_URL = "http://localhost:3000";

const GameList = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    getGames();
  }, []);

  const getGames = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/game/games`);
      setGames(response.data);
    } catch (error) {
      console.error('Failed to fetch games:', error);
    }
  };

  const handleGameDelete = async (gameId) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this game?');
    if (!confirmDelete) return;

    try {
      const response = await axios.delete(`${BASE_URL}/game/games/${gameId}`);
      if (response.status === 200) {
        setGames((prevGames) => prevGames.filter((game) => game._id !== gameId));
      }
    } catch (error) {
      console.error('Failed to delete the game:', error.response ? error.response.data : error.message);
    }
  };

  return (
    <div className="wonka-list">
      <h1 className="wonka-title">Game List</h1>
      <div className="wonka-game-grid">
        {games.map((game) => (
          <div key={game._id} className="wonka-game-card">
            <GameCard game={game} />
            <div className="wonka-buttons">
              <button
                onClick={() => handleGameDelete(game._id)}
                className="wonka-button delete-button"
              >
                Delete
              </button>
              <Link to={`/games/${game._id}`}>
                <button className="custom-btn">View Details</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GameList;