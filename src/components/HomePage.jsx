import React, { useState } from 'react'
import CommentForm from './CommentsForm'
import CommentsList from './CommentsList'
import GameCard from './GameCard'

const HomePage = ({ games = [], user }) => {
  const [comments, setComments] = useState([])
  const [showComments, setShowComments] = useState(false) 

  const handleCommentSubmit = (gameId, comment, rating, user) => {
    const newComment = { gameId, text: comment, rating, user }
    setComments((prevComments) => [...prevComments, newComment])
  }

  const toggleComments = () => {
    setShowComments((prev) => !prev)
  }

  return (
    <div>
      <h1>Welcome to Wonka Land!</h1>
      <p>Explore the games and have fun!</p>

      <button onClick={toggleComments}>
        {showComments ? 'Hide Comments' : 'Show Comments'}
      </button>

      {showComments && <CommentsList comments={comments} />}

      {Array.isArray(games) &&
        games.map((game) => (
          <GameCard
            key={game.id}
            game={game}
            onClick={(game) => console.log(game.name)}
          />
        ))}

      {Array.isArray(games) &&
        games.map((game) => (
          <CommentForm
            key={game.id}
            gameId={game.id}
            user={user}
            onCommentSubmit={handleCommentSubmit}
          />
        ))}
    </div>
  )
}

export default HomePage
