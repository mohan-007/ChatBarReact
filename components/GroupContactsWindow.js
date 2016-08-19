import React from 'react'
	var divStyle = {
    float: "left",
    position: "fixed",
    marginLeft:" 110px",
    marginRight: "20px",
    bottom: "20px",
    cursor: "pointer",
    borderStyle: "groove",
    height: "125px"
	};
export default class GroupContactsWindow extends React.Component {
	render(){
		return (
			<div style={divStyle} >{this.props.contactList.names.map((name,index) => <li key={index}>{name}</li>)}</div>
		);
	}
}