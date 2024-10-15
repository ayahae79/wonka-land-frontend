
const GameCard = ({ game, handleGameClick }) => {

  return (
    <div onClick={() => handleGameClick(game)}>
      <img src={game.image} alt={game.name} />
      <h2>{game.name}</h2>
    </div>
  )
}

export default GameCard
