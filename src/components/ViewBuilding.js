import React from 'react';

class ViewBuilding extends React.Component {
	render() {

		const selected = this.props.data.filter(building => {
			return building.id == this.props.selectedBuilding
		})
		if (this.props.selectedBuilding == 0) {
			return (
			<div>
				<p>
					{' '}
					<i>Click on a name to view more information</i>
				</p>
			</div>
		);
		}
		else {
			return (
				<div>
					<p>
					ID: {' '} {selected[0].id}
					</p>
					<p>
					Name: {' '} {selected[0].name}
					</p>
					<p>
					Code: {' '} {selected[0].code}
					</p>
					<p>
					Address: {' '} {selected[0].address}
					</p>
				</div>
			);
		}
	}
}
export default ViewBuilding;
