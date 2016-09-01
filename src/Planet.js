import React from 'react';
import {Link} from 'react-router';
// import '../public/styles.css'

export default React.createClass({
	render() {
		const styles = this.getStyles();
		const planet = this.props.params.planet;
		const subRoute = planet+'/character';
		const planetName = planet[0].toUpperCase() + planet.slice(1);
		return(
		      <div className="background" style={styles.background}>
		      	<Link to={subRoute}>{planetName}</Link>
		      	{this.props.children}
		      </div>
		 )
	},

	getStyles() {
		const planet = this.props.params.planet;
		return {
			background: {
				backgroundImage: `url(../assets/img/${planet}.jpg)`,
				backgroundSize: "contain",
				backgroundRepeat: "no-repeat",
				width: "100vw",
				height: "100vh",
				color: "#fff"
			}
		}
	}
})

