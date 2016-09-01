import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';
import Planet from './Planet';
import Character from './Character';
import Info from './Info';

class CharacterWrapper extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		var planetInfo = Info.filter(planet=>{return this.props.params.planet==planet.planet.toLowerCase()})[0];
		return(
		       <Character 
		       	planet={planetInfo.planet} 
		       	character={planetInfo.character} 
		       	num={planetInfo.num}
		       />
		 )
	}
}

var App = React.createClass({
	render() {
		return(
		      <Router history={hashHistory}>
		      	<Route path="/:planet" component={Planet}>
		      		<Route path="character" component={CharacterWrapper}/>
		      	</Route>
		      </Router>
		 )
	}
})

ReactDOM.render(<App/>, document.getElementById('app'))