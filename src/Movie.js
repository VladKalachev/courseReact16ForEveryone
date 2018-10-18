import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

// class Movie extends Component {
//   static propTypes = {
//     movie: PropTypes.shape({
//       title: PropTypes.string.isRequired
//     }),
//     disc: PropTypes.string
//   };

//   render() {
//     return (
//       <div>
//         <h1>{this.props.movie.title}</h1>
//         <p>{this.props.movie.overview}</p>
//       </div>
//     );
//   }
// }

const POSTER_PATH = "http://image.tmdb.org/t/p/w154";

const Movie = ({ movie }) => {
  return (
    <div>
      <h1>{movie.title}</h1>
      <Link to={`/${movie.id}`}>
        <img src={`${POSTER_PATH}${movie.poster_path}`} alt={movie.title} />
      </Link>
    </div>
  );
};

export default Movie;

Movie.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired
  }),
  disc: PropTypes.string
};
