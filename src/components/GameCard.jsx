const GameCard = ({ game, onClick }) => {
  return (
    <div onClick={() => onClick(game)}>
      <img src={game.image} alt={game.name} />
      <h2>{game.name}</h2>
    </div>
  )
}

export default GameCard
