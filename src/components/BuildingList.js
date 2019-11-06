import React from 'react';

class BuilingList extends React.Component {
	render() {
		//console.log('This is my directory file', this.props.data);
		const { data, filterText, ignore } = this.props;

		const buildingList = data
		.filter( directory => {
			return ((directory.name.toLowerCase().indexOf(filterText.toLowerCase()) >= 0) || (directory.code.toLowerCase().indexOf(filterText.toLowerCase()) >= 0)) && (ignore.indexOf(directory.id) < 0)
		})
		.map(directory => {
			return (
				<div>
					<tr key={directory.id}
						onClick = {() => this.props.selectedUpdate(directory.id)}
						>
						<td> {directory.code} </td>
						<td> {directory.name} </td>
					</tr>
					<button onClick = {() => this.props.ignoreUpdate(directory.id)}>Delete</button>
				</div>
			);
		});

		return <div>{buildingList}</div>;
	}
}
export default BuilingList;
