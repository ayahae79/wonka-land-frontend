import React from 'react'

const CommentsList = ({ comments }) => {
  return (
    <div>
      <h3>Comments</h3>
      {comments.length === 0 ? (
        <p>No comments yet.</p>
      ) : (
        comments.map((comment, index) => (
          <div key={index}>
            <p>
              <strong>User:</strong> {comment.user.name}
            </p>
            <p>
              <strong>Comment:</strong> {comment.text}
            </p>
            <p>
              <strong>Rating:</strong> {comment.rating}
            </p>
          </div>
        ))
      )}
    </div>
  )
}

export default CommentsList
