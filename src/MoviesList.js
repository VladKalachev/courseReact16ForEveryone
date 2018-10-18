import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import "./App.css";
import Movie from "./Movie";

// 65e043c24785898be00b4abc12fcdaae

class MoviesList extends Component {
  state = {
    movies: []
  };

  async componentDidMount() {
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=65e043c24785898be00b4abc12fcdaae&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`
      );
      const movies = await res.json();
      console.log(movies);
      this.setState({
        movies: movies.results
      });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    //clg
    const { match } = this.props;
    return (
      <div>
        {this.state.movies.map(movie => {
          return <Movie key={movie.id} movie={movie} match={match} />;
        })}
      </div>
    );
  }
}

export default MoviesList;
