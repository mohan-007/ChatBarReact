import React from 'react';
import ReactDOM from 'react-dom';
import ChatBar from './components/ChatBar'
var chatBarDetails = {
	showContacts : true
}

export default class App extends React.Component {
constructor(){
	super();
	this.state = {
		chatBarDetails : { 
				ContactsDetails : {
					showContacts : false,
					ContactList : {
						names : ["mohan","arun","aathi"]
					}
				},
				GroupContacts : {
					showGroupContacts : false,
					ContactList : {
						names : ["ZSupport","ZNMS","Zbooks"]
					}
				}
		}
	}
			this.toggleContactWindow = this.toggleContactWindow.bind(this);
			this.toggleGroupContactWindow = this.toggleGroupContactWindow.bind(this);


}
toggleContactWindow(){
		var posState = {
		chatBarDetails : { 
				ContactsDetails : {
					showContacts : true,
					ContactList : {
						names : ["mohan","arun","aathi"]
					}
				},
				GroupContacts : {
					showGroupContacts : false,
					ContactList : {
						names : ["ZSupport","ZNMS","Zbooks"]
					}
				}				
		}
	}
	var negState  = {
		chatBarDetails : { 
				ContactsDetails : {
					showContacts : false,
					ContactList : {
						names : ["mohan","arun","aathi"]
					}
				},
				GroupContacts : {
					showGroupContacts : false,
					ContactList : {
						names : ["ZSupport","ZNMS","Zbooks"]
					}
				}
		}
	}
		this.state.chatBarDetails.ContactsDetails.showContacts ? this.setState(negState) : this.setState(posState);
}
toggleGroupContactWindow(){
		var posState = {
		chatBarDetails : { 
				ContactsDetails : {
					showContacts : false,
					ContactList : {
						names : ["mohan","arun","aathi"]
					}
				},
				GroupContacts : {
					showGroupContacts : true,
					ContactList : {
						names : ["ZSupport","ZNMS","Zbooks"]
					}
				}				
		}
	}
	var negState  = {
		chatBarDetails : { 
				ContactsDetails : {
					showContacts : false,
					ContactList : {
						names : ["mohan","arun","aathi"]
					}
				},
				GroupContacts : {
					showGroupContacts : false,
					ContactList : {
						names : ["ZSupport","ZNMS","Zbooks"]
					}
				}
		}
	}
		this.state.chatBarDetails.GroupContacts.showContacts ? this.setState(negState) : this.setState(posState);
}

render(){
	return (
		<div>
		<ChatBar chatBarDetail={this.state.chatBarDetails} toggleContactWindow= {this.toggleContactWindow} toggleGroupContactWindow={this.toggleGroupContactWindow}/>
		</div>
	);
}

}