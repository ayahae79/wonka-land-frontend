// src/components/GameCard.jsx
import React from 'react'

const GameCard = ({ game }) => {
  return (
    <div
      style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '5px' }}
    >
      <img
        src={game.image}
        alt={game.name}
        style={{ width: '100px', height: '100px' }}
      />
      <h2>{game.name}</h2>
      <p>Age: {game.age}</p>
      <p>Height: {game.height}</p>
      <p>Weight: {game.weight}</p>
      <p>Medical Condition: {game.midical_condition}</p>
    </div>
  )
}

export default GameCard
