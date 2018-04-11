import React from 'react';
import PropTypes from 'prop-types';
import './MovieCard.css';


export default class MovieCard extends React.Component {
		static propTypes = {
		title:     PropTypes.string.isRequired,
		text:      PropTypes.string.isRequired,
		genre:     PropTypes.array.isRequired,
		removeFunc:PropTypes.func
	};
	static defaultProps = {
		removeFunc: () => {}
	};

	render() {
		const {title, text, rating, genre,removeFunc} = this.props;

		return (
			<div className="MovieCard">
				<button className="MovieCard__btn MovieCard__btn--del" onClick={removeFunc}>Delete</button>
				<div className="MovieInfo__info">
					<h2 className="MovieInfo__title">{title}</h2>
					<p className="MovieInfo__descr">{text}</p>
					<p className="MovieInfo__rating">Rating: {rating}<span className="MovieInfo__rating2">/10</span></p>
				</div>
				<ul className="ChipsList">
                    {this.props.children}
					{genre.map(genreList=><li key={genreList.toString()} className="ChipsList__item">{genreList}</li>)}
				</ul>
			</div>
		);
	}
};

