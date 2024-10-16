import axios from "axios"
import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import CommentForm from "../components/CommentsForm"
import CommentsList from "../components/CommentsList"
const BASE_URL = "http://localhost:3000"

const GameDetails = ({ user }) => {
  const { id } = useParams() // Get game ID from URL params
  const gamesId = id

  const [gameDetails, setGameDetails] = useState({})
  const [comments, setComments] = useState([]) // State to hold comments

  useEffect(() => {
    // Fetch game details
    const fetchGameDetails = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/game/games/${gamesId}`)
        setGameDetails(response.data)
      } catch (error) {
        console.error("Error fetching game details:", error)
      }
    }

    // Fetch comments for the game
    const fetchComments = async () => {
      try {
        const response = await axios.get(
          `${BASE_URL}/game/games/${gamesId}/comments`
        ) // Make sure the route is correct
        setComments(response.data.comments) // Store comments in state
      } catch (error) {
        console.error("Error fetching comments:", error)
      }
    }

    fetchGameDetails()
    fetchComments()
  }, [gamesId])

  // Handler for submitting new comments
  const handleCommentSubmit = async (newComment) => {
    try {
      const response = await axios.post(
        `${BASE_URL}/game/games/${gamesId}/comments`,
        newComment
      )
      setComments((prevComments) => [...prevComments, response.data]) // Add new comment to the list
    } catch (error) {
      console.error("Error submitting comment:", error)
    }
  }

  return (
    <div
      className="game-details"
      style={{
        maxWidth: "800px",
        margin: "0 auto",
        padding: "20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1>{gameDetails.name}</h1>
      <img
        src={gameDetails.image}
        alt={gameDetails.title}
        style={{ width: "200px", height: "200px" }}
      />
      <p>
        <strong>Age allowed:</strong> {gameDetails.age}
      </p>
      <p>
        <strong>Your Height must be:</strong> {gameDetails.height}
      </p>
      <p>
        <strong>Maximum Weight:</strong> {gameDetails.weight}
      </p>
      <p>
        <strong>Health Advisory:</strong> We recommend that people who have
        medical issues, for example: {gameDetails.midical_condition} to not try
        this game.
      </p>

      <h2>Comments</h2>
      <CommentsList comments={comments} />
      <CommentForm onSubmit={handleCommentSubmit} user={user} />
    </div>
  )
}
export default GameDetails
