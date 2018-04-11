import React from 'react';
import PropTypes from 'prop-types';
import './MovieForm.css';

export default class MovieForm extends React.Component {
	static propTypes = {
		onFormSubmit: PropTypes.func.isRequired
	};

	state = {
		titleValue: '',
		descriptionValue: '',
		ratingValue: 1,
		genreValue: []
	};

    stateDefault = this.state;

	_titleChange = (evt) => {
		const value = evt.target.value;

		this.setState({
			titleValue: value
		})
	}

	_descriptionChange = (evt) => {
		const value = evt.target.value;

		this.setState({
			descriptionValue: value
		})
	}

	_ratingChange = (evt) => {
		const value = evt.target.value;

		this.setState({
			ratingValue: value

		})
	}

	_genreChange = (evt) => {
		console.log(evt.target.checked);

		const value = evt.target.value;
		// 	this.setState({	

		// })
		if (evt.target.checked) {
			this.setState({
				genreValue: [...this.state.genreValue, value]
			},
				function(){
				console.log(this.state.genreValue)
				})

		}
		else {
			this.setState({
      			genreValue: this.state.genreValue.filter(genre => genre !== value)

   		 	}, 	function(){
				console.log(this.state.genreValue)
				})

		}
	}


	_handleFormSubmit = (evt) => {
		evt.preventDefault();

		if (( this.state.titleValue === '')||(this.state.descriptionValue === '')) 
				alert("Заполните поля формы");

		else {
			this.props.onFormSubmit(this.state);
			this.setState(this.stateDefault);
		}
		console.log(evt.target)
		evt.target.reset();
	}
	render() {
		const { title, description,rating, } = this.props;
		const options = [1,2,3,4,5,6,7,8,9,10];
		const MovieForm__genre = ['drama','action','comedy'];
		const { titleValue, descriptionValue, ratingValue } = this.state;
		

		return (
			<form className="MovieForm" onSubmit={this._handleFormSubmit}>
				<label className="MovieForm__label-for-form">{title} 
					<input className="MovieForm__input" type="text" value={titleValue} onChange={this._titleChange} />
				</label>
				<label className="MovieForm__label-for-form">{description} 
					<textarea className="MovieForm__txtarea" rows="4" value={descriptionValue} onChange={this._descriptionChange} ></textarea>
				</label>
				<label className="MovieForm__label-for-form">{rating} 
					<select className="MovieForm__input" value={ratingValue} onChange={this._ratingChange} >
						{options.map( option => <option key ={option}>{option}</option> )}
					</select>
				</label>
			    <div className="MovieForm__fieldset">
			   		 {MovieForm__genre.map( genre => (<label key ={genre} className="MovieForm__label-for-checkbox"><input className="MovieForm__checkbox" type="checkbox" name="genre" value={genre} onChange={this._genreChange} />{genre} </label>))}
				</div>

				<button className="MovieForm__submit">submit</button>
			</form>
		);
	}
}

