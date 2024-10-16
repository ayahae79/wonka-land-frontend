import React from "react"

const CommentsList = ({ comments }) => {
  return (
    <div>
      <h3>Comments</h3>
      {comments.length === 0 ? (
        <p>No comments yet.</p>
      ) : (
        comments.map((comment) => (
          <div key={comment._id} className="comment">
            <p>
              <span className="material-icons input-icon">person</span>
              <strong> Anonymous User Says:</strong>
            </p>{" "}
            {/* Display the username */}
            <p>{comment.comment}</p>
            <p>Rating: {comment.rate}</p>
          </div>
        ))
      )}
    </div>
  )
}

export default CommentsList
