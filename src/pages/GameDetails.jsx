
import axios from "axios"
import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

const BASE_URL = "http://localhost:3000"
import CommentForm from '../components/CommentsForm'

const GameDetails = () => {
  const { id } = useParams()
  const [gameDetails, setGameDetails] = useState({})

  const [comments, setComments] = useState([]) // State to hold comments


  useEffect(() => {
    const fetchGameDetails = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/game/games/${id}`)

        setGameDetails(response.data)
      } catch (error) {
        console.error('Error fetching game details:', error)
      }
    }

    const fetchComments = async () => {
      try {
        const response = await axios.get(
          `${BASE_URL}/game/games/${id}/comments`
        ) // Adjust the endpoint as necessary
        setComments(response.data.comments) // Set comments from response

      } catch (error) {
        console.error('Error fetching comments:', error)
      }
    }

    fetchGameDetails()
    fetchComments()
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
{comments.map((comment) => (
          <div
            key={comment._id}
            className="comment-card"
            style={{
              backgroundColor: '#f9f9f9',
              border: '1px solid #ddd',
              borderRadius: '8px',
              padding: '15px',
              transition: 'box-shadow 0.3s ease',
              boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
            }}
          >
            <div
              className="comment-header"
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}
            >
              <strong className="comment-user">{comment.user}</strong>
              <span className="comment-rating">Rating: {comment.rate}/10</span>
            </div>
            <p className="comment-content">{comment.comment}</p>
          </div>
        ))}
      </div>

      {/* Comment Form */}
      <CommentForm
        gameId={id}
        userId={'User ID'} // Replace with actual user ID data
        onCommentSubmit={handleCommentSubmit}
      />
      </div>

    </div>
  )
}

export default GameDetails
