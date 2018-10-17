import React, { Component } from "react";
import PropTypes from "prop-types";

class Movie extends Component {
  static propTypes = {
    movie: PropTypes.shape({
      title: PropTypes.string.isRequired
    }),
    disc: PropTypes.string
  };

  static defaultProps = {
    disc: "description not available"
  };

  render() {
    console.log(this.props);
    return (
      <div>
        <h1>{this.props.movie.title}</h1>
        <p>{this.props.disc}</p>
      </div>
    );
  }
}

// function Movie({ movie }) {
//   return (
//     <div>
//       <h1>{movie.title}</h1>
//       <p>{movie.title}</p>
//     </div>
//   );
// }

// Movie.PropTypes = {

// }

export default Movie;
