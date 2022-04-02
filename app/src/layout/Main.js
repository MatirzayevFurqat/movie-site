import React from 'react';
import Movies from '../components/Movies';

export default class Main extends React.Component {
  state = {
    movies: []
  }
  componentDidMount() {
    fetch("http://www.omdbapi.com/?apikey=f5572fb5&s=Marvel")
      .then(res => res.json())
      .then(data => this.setState({ movies: data.Search }))
  }
  render() {
    return (
      <div className='container content'>
        {
          this.state.movies.length ? <Movies movies={this.state.movies} /> : <div className="loading-animation">
            <div className="lds-roller" ><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
          </div>
        }

      </div>
    );
  }
}