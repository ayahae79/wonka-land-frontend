import axios from "axios"
import React, { useState, useEffect } from "react"
const BASE_URL = "http://localhost:3000"
import { useParams } from "react-router-dom"
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
    <div>
      <h1>{gameDetails.name}</h1>
      <img
        src={gameDetails.image}
        alt={gameDetails.title}
        style={{ width: "200px", height: "200px" }}
      />
      <p>Age allowed: {gameDetails.age}</p>
      <p>your Height must be: {gameDetails.height}</p>
      <p>Maximum Weight: {gameDetails.weight}</p>
      <p>
        we recomend that people who have medical issue for example:{" "}
        {gameDetails.midical_condition} to not try this game
      </p>
    </div>
  )
}

export default GameDetails
