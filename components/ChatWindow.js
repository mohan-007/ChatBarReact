import React from 'react';

export default class ContactChatWindow extends React.Component {
constructor(){
	super();
	this.openChatWindow = this.openChatWindow.bind(this);
}
openChatWindow(name){
	this.props.openChatWindow(name);	
}
render(){
	return(
		<div key={this.props.name}>
		<li onClick={()=>{this.openChatWindow(this.props.name)}}>{this.props.name}</li>
		</div>
		);
}

}