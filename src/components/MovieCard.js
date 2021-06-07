import React from "react";
import ReactStars from "react-rating-stars-component";
import PropTypes from "prop-types";

const MovieCard = ({ movie, handleRemove }) => {
  const handleClick = () => {
    return handleRemove(movie.id);
  };

  return (
    <div className="Card">
      <img className="poster" src={movie.posterUrl} alt="" />
      <div className="Carddesc">
        <h1 className="title"> {movie.title} </h1>
        <h3 className="text"> {movie.description}</h3>
        <ReactStars {...movie.rate} classNames="rating" />
        
      </div>
    </div>
  );
};

MovieCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  posterURl: PropTypes.string,
  rate: PropTypes.object,
  handleRemove: PropTypes.func,
};

export default MovieCard;
