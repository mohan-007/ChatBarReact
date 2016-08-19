import React from 'react';
import ReactDOM from 'react-dom';
import ChatBar from './components/ChatBar'
var chatBarDetails = {
	showContacts : true
}
var openedChatWindow = 0;
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
				},
				openedChatWindow : {
					contactChat : [],
					number : openedChatWindow
				}
		}
	}
			this.toggleContactWindow = this.toggleContactWindow.bind(this);
			this.toggleGroupContactWindow = this.toggleGroupContactWindow.bind(this);
			this.openChatWindow = this.openChatWindow.bind(this);


}
openChatWindow(name){
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
				},
				openedChatWindow : {
					contactChat : [],
					number :  openedChatWindow+1
				}				
		}
	}
	posState.chatBarDetails.openedChatWindow.contactChat.push(name);
	this.setState(posState);
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
				},
				openedChatWindow : {
					contactChat : [],
					number : openedChatWindow
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
				},
				openedChatWindow : {
					contactChat : [],
					number : openedChatWindow
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
				},
				openedChatWindow : {
					contactChat : [],
					number : openedChatWindow
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
				},
				openedChatWindow : {
					contactChat : [],
					number : openedChatWindow
				}
		}
	}
		this.state.chatBarDetails.GroupContacts.showContacts ? this.setState(negState) : this.setState(posState);
}

render(){
	return (
		<div>
		<ChatBar chatBarDetail={this.state.chatBarDetails} toggleContactWindow= {this.toggleContactWindow} toggleGroupContactWindow={this.toggleGroupContactWindow} openChatWindow={this.openChatWindow}/>
		</div>
	);
}

}