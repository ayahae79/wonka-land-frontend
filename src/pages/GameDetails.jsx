import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import CommentForm from '../components/CommentsForm' // Ensure this path is correct

const BASE_URL = 'http://localhost:3000'

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

  const handleCommentSubmit = async (gameId, comment, rating, userId) => {
    try {
      const response = await axios.post(`${BASE_URL}/review/add`, {
        gameId,
        comment,
        rate: rating,
        userId // Ensure userId is passed correctly
      })
      console.log(response)

      console.log('New comment added:', response.data)

      // Update comments state with the new comment
      setComments((prevComments) => [...prevComments, response.data.review])
    } catch (error) {
      console.error('Error submitting comment:', error)
    }
  }

  return (
    <div
      className="game-details"
      style={{
        maxWidth: '800px',
        margin: '0 auto',
        padding: '20px',
        fontFamily: 'Arial, sans-serif'
      }}
    >
      <h1>{gameDetails.name}</h1>
      <img
        src={gameDetails.image}
        alt={gameDetails.title}
        style={{ width: '200px', height: '200px' }}
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
      <p>id = {gameDetails._ids}</p>
      <h2>Comments</h2>
      <div
        className="comments-container"
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '15px',
          marginTop: '20px'
        }}
      >
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
  )
}

export default GameDetails
