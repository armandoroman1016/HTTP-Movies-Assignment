import React, { Component } from "react";
import axios from "axios";
import MovieCard from "./MovieCard";
import { Link } from "react-router-dom";

export default class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/movies")
      .then(res => this.setState({ movies: res.data }))
      .catch(err => console.log(err.response));
  }

  render() {
    return (
      <div className="movie-list">
        {this.state.movies.map(movie => (
          <MovieDetails key={movie.id} movie={movie}  movieList = {this.state.movies}/>
        ))}
      </div>
    );
  }
}

function MovieDetails({ movie, movieList }) {
  return (
    <Link to={`/movies/${movie.id}`}>
      <MovieCard movie={movie} movieList = {movieList} />
    </Link>
  );
}
