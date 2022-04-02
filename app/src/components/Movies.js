import Movie from "./Movie";

export default function Movies(prop) {
  const { movies } = prop;
  return (
    <div className="movies">
      {movies.map(movie => (
        <Movie key={movie.imdbID}{...movie} />
      ))}
    </div>
  )

}