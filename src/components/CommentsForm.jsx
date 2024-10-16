import React, { useState } from "react"

const CommentForm = ({ gamesId, user, onCommentSubmit }) => {
  const [comment, setComment] = useState("")
  const [rating, setRating] = useState(0)

  const handleSubmit = (e) => {
    e.preventDefault()

    onCommentSubmit(gamesId, comment, rating, user)

    setComment("")
    setRating(0)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="thebutton">
        <textarea
          className="input"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Add a comment"
          required
        />
        <select
          className="rating"
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
      </div>
      <button className="btn-96">
        <span>Sumbit</span>
      </button>

      {/* <button className="btn-96 type="submit">Submit</button> */}
    </form>
  )
}
export default CommentForm
