// eslint-disable-next-line react/prop-types
const MovieCard = ({ movie: { imdbID, Year, Poster, Title, Type } }) => {
  return (
    <div className="movie">
      <a
        href={`https://www.imdb.com/title/${imdbID}/`}
        target="_blank"
        rel="noopener noreferrer"
        className="movie-link"
      >
        <div>
          <p>{Year}</p>
        </div>

        <div>
          <img
            src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/400"}
            alt={Title}
          />
        </div>
        <div>
          <span>{Type}</span>
          <h3>{Title}</h3>
        </div>
      </a>
    </div>
  );
};

export default MovieCard;
