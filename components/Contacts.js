import React from 'react'
import ContactsWindow from './ContactsWindow'

	var divStyle = {
		float : "left",
		diplay : "inner-block",
		marginLeft : "20px",
		marginRight : "20px",
		cursor: "pointer"
	};
export default class Contacts extends React.Component {

	render(){
		return (<div>
			<div style={divStyle} onClick={this.props.toggleContactWindow}>contacts</div>
            </div>
		);
	}
}