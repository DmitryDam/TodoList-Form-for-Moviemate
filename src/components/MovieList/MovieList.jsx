import React from 'react';
import PropTypes from 'prop-types';
import './MovieList.css';
import MovieCard from '../MovieCard/MovieCard';

class MovieList extends React.Component {
		static propTypes = {
		onCardClick: PropTypes.func.isRequired,
		moviesObj: PropTypes.array.isRequired,
	};


	render() {
		const { moviesObj, onCardClick } = this.props;
		return (
			<div className="MovieList">
			{moviesObj.map((movieList) => <MovieCard {...movieList} key={movieList.id} removeFunc={() => {onCardClick(movieList.id);}} />)}
			

			</div>
		);
	}
}

export default MovieList;
