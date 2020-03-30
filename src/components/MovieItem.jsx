import React from "react";

class MovieItem extends React.Component {

  constructor(){
    super()

    this.state = {
      willWatch: false
    };
  }

  render () {
    const { movie, removeMovies, addMovieToWillWatch, removeMoviesFromWillWatch } = this.props
    // console.log(props)
    return (
      <div className="card">
        <img
          className="card-img-top"
          src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path ||
          movie.poster_path}`}
          alt=""
        />
        <div className="card-body">
          <h6 className="card-title">{movie.title}</h6>
          <div className="d-flex justify-content-between align-items-center">
            <p className="mb-0">Rating: {movie.rating}</p>
            {
              this.state.willWatch ?             
              <button 
                type="button" 
                className="btn btn-success"
                onClick={() => {
                  this.setState({
                    willWatch: false
                  });
                  removeMoviesFromWillWatch(movie)
                }}
              >
                Remove Watch
              </button> :
              <button 
                type="button" 
                className="btn btn-secondary"
                onClick={() => {
                  this.setState({
                    willWatch: true
                  });
                  addMovieToWillWatch(movie)
                  }
                }
              >
                added To Watch
              </button>
            }

          </div>
          <button onClick={removeMovies.bind(null, movie)}>Delete</button>
        </div>
      </div>
      );
  }
}


export default MovieItem;