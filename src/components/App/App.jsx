import React from 'react';
import v4 from 'uuid';
import './App.css';
import Header from '../Header/Header';
import AppBody from '../AppBody/AppBody';
import MovieList from '../MovieList/MovieList';
import MovieForm from '../MovieForm/MovieForm';
import movies from 'bdFilms.jsx';

class App extends React.Component {
    state = {
    movies: movies
  }

    deleteCard = (id) => {
    this.setState({
      movies: this.state.movies.filter(card => card.id !== id)

    })
  }
    addCard = (Card) => {

    const movieCard = {
      id:     v4(),
      title:  Card.titleValue,
      text:   Card.descriptionValue,
      rating: Card.ratingValue,
      genre:  Card.genreValue
    };
    this.setState({
      movies: [...this.state.movies, movieCard]
    })
  }

  render() {
    const { movies } = this.state;
    return (
      <div className="App">
        <Header text="Movie Mate"/>
        <AppBody>
          <MovieList moviesObj={movies} onCardClick={this.deleteCard} />
          <MovieForm title="Title" description="Description" rating="Rating" onFormSubmit={this.addCard} />

        </AppBody>
      </div>
    );
  }
}

export default App;