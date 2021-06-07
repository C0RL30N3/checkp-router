import React from "react";
import MovieCard from "./MovieCard";
import { Link } from "react-router-dom";


const MovieList = ({
  ListOfMovies,
  handleRemove,
  search,
  ratefiltring,
}) => {
  return (
    <div>
      <div id="ListOfMovies">
        {ListOfMovies.filter(
          (movie) =>
            movie.title.toLowerCase().includes(search.toLowerCase()) &&
            movie.rate.value >= ratefiltring
        ).map((movie) => (
          <Link key={movie.id} to ={`/${movie.title}`}>
          <MovieCard
            movie={movie}
            handleRemove={handleRemove}
          />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
