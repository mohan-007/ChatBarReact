import React from 'react'
	var divStyle = {
		float : "left",
		diplay : "inner-block",
		marginLeft : "20px",
		marginRight : "20px",
		cursor : "pointer"
	};
export default class GroupChat extends React.Component {
	render(){
		return (
			<div style={divStyle} onClick={this.props.toggleGroupContactWindow}>GroupCHat</div>
		)
	}
}