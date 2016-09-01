import React from 'react';
import axios from 'axios';

export default React.createClass({
	getInitialState() {
		return {
			info: null
		}
	},

	componentWillMount() {
		axios.get(`http://swapi.co/api/people/${this.props.num}`)
		.then(result => {
			this.setState({
				info: result.data
			})
			console.log('character.js line 21', this.state.info)
		})
	},

	render() {
		console.log('render', this.state)
		const data = this.state.info;
		return(
		      <div>
		      	{data && <h3>{data.name}</h3>}
		      	{data && <h5>Height: {data.height}</h5>}
		      	{data && <h5>Mass: {data.mass}</h5>}
		      	{data && <h5>Hair Color: {data.hair_color}</h5>}
		      	{data && <h5>Skin Color: {data.skin}</h5>}
		      	{data && <h5>Eye Color: {data.eye}</h5>}
		      	{data && <h5>Birth Year: {data.birth_year}</h5>}
		      	{data && <h5>Gender: {data.gender}</h5>}
		      </div>
		 )
	}
})