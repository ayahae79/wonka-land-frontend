import React, { useState } from 'react'

const CommentForm = ({ gameId, user, onCommentSubmit }) => {
  const [comment, setComment] = useState('')
  const [rating, setRating] = useState(0)

  const handleSubmit = (e) => {
    e.preventDefault()
   
    onCommentSubmit(gameId, comment, rating, user)

   
    setComment('')
    setRating(0)
  }

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Add a comment"
        required
      />
      <select
        value={rating}
        onChange={(e) => setRating(e.target.value)}
        required
      >
        <option value="">Rate this game</option>
        {[...Array(10).keys()].map((num) => (
          <option key={num + 1} value={num + 1}>
            {num + 1}
          </option>
        ))}
      </select>
      <button type="submit">Submit</button>
    </form>
  )
}

export default CommentForm
