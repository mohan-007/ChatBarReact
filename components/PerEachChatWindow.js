import React from 'react'
var divStyle = {
	borderStyle: "ridge",
    bottom: "0px",
    position: "fixed",
    marginRight: "20px",
    marginBottom: "24px",
    height: "218px",
    width: "200px",
    right: "89px"
}

export default class ChatWindow extends React.Component{

	render(){
		return(
				<div style={divStyle}>
					<p style={{width:"100%",borderStyle:"solid",top:"0px"}}>{this.props.name}</p>
					<textarea></textarea>
					
				</div>
			);
	}
}