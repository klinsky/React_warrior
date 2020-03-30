import React from "react";
import moviesData from "../moviesData";
import MovieItem from "../components/MovieItem";

class App extends React.Component {
  constructor(){
    super()

    this.state = {
      movies: moviesData,
      moviesWillWatch: []
    };
  }

  removeMovies = (movie) => {
    const updateMovies = this.state.movies.filter(function(item) {
       return item.id !== movie.id
    });
    this.setState({
      movies: updateMovies
    });
  }

  addMovieToWillWatch = (movie) => {
    const updateMoviesWillWatch = [...this.state.moviesWillWatch, movie];

    this.setState({
      moviesWillWatch: updateMoviesWillWatch
    });    
  }

  removeMoviesFromWillWatch = (movie) => {
    const updateMoviesWillWatch = this.state.moviesWillWatch.filter(function(item) {
       return item.id !== movie.id
    });
    this.setState({
      moviesWillWatch: updateMoviesWillWatch
    });
  }

  render() {
    console.log(this)
    return (
      <div className="container">
        <div className="row">
          <div className="col-9">
            <div className="row">
                {this.state.movies.map(movie => {
                  return (
                    <div className="col-6 mb-4" key={movie.id} >
                      <MovieItem 
                      movie={movie} 
                      removeMovies={this.removeMovies}
                      addMovieToWillWatch={this.addMovieToWillWatch}
                      removeMoviesFromWillWatch={this.removeMoviesFromWillWatch}
                      />
                    </div>
                  );
                })} 
            </div>
          </div>
          <div className="col-3">
                  <p>Will watch: {this.state.moviesWillWatch.length}</p>
          </div> 
        </div>
      </div>
    );
  }
}

export default App;
