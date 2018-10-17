import React, { Component } from "react";
import PropTypes from "prop-types";

class Movie extends Component {
  static propTypes = {
    movie: PropTypes.shape({
      title: PropTypes.string.isRequired
    }),
    disc: PropTypes.string
  };

  render() {
    return (
      <div>
        <h1>{this.props.movie.title}</h1>
        <p>{this.props.movie.overview}</p>
      </div>
    );
  }
}

export default Movie;
