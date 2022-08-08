const TopMovieItem = ({index, name, score}) => {
  return (
    <div className="top-movie-item">
      <div className="top-movie-item-index">{index}</div>
      <div className="top-movie-item-name">{name}</div>
      <div className="top-movie-item-score">{score}</div>
    </div>
  )
}

export default TopMovieItem;