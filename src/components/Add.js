import React from 'react';

class Add extends React.Component {
	render() {
		//You will need to save the value from the textbox and update it as it changes
		//You will need the onChange value for the input tag to capture the textbox value

		return (
			<div>
				<h3>Add Building</h3>
				<form>
					<label htmlFor="name">Name: </label>
					<input
					type = "input"
					name = "name"
					ref = {(name) => this.name = name}/>
					<p/>
					<label htmlFor="code">Code: </label>
					<input
					type = "input"
					name = "code"
					ref = {(code) => this.code = code}/>
					<p/>
					<label htmlFor="address">Adress: </label>
					<input
					type = "input"
					name = "address"
					ref = {(address) => this.address = address}/>
					<h4>Coordinates</h4>
					<label htmlFor="long">Longitude: </label>
					<input
					type = "input"
					name = "long"
					ref = {(long) => this.long = long}/>
					<p/>
					<label htmlFor="lat">Latitude: </label>
					<input
					type = "input"
					name = "lat"
					ref = {(lat) => this.lat = lat}/>
				</form>
				<button
					onClick = {() => this.props.addBuild(
							this.name.value,
							this.code.value,
							this.address.value,
							this.long.value,
							this.lat.value
						)}
				>Add</button>
			</div>
		);
	}
}
export default Add;
