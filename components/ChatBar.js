import React from 'react';
import Contacts from './Contacts'
import GroupChat from './GroupChat'
import RecentChat from './RecentChat'
import ContactsWindow from './ContactsWindow'
import GroupContactsWindow from './GroupContactsWindow'
import ChatWindow from './PerEachChatWindow'


	var divStyle = {
	width: "100%",
    position: "fixed",
    float: "left",
    bottom: "0px",
    borderWidth: "2px",
    border: "#3b9256",
    borderStyle: "solid"

	};
export default class ChatBar extends React.Component {

	render(){
		return(
			<div>
			    { this.props.chatBarDetail.ContactsDetails.showContacts ? <ContactsWindow  contactList={this.props.chatBarDetail.ContactsDetails.ContactList} openChatWindow={this.props.openChatWindow}/> : null }
			  	{ this.props.chatBarDetail.GroupContacts.showGroupContacts ? <GroupContactsWindow  contactList={this.props.chatBarDetail.GroupContacts.ContactList}/> : null }
			  	{  this.props.chatBarDetail.openedChatWindow.contactChat.map((name,index)=> <ChatWindow key={index} name={name} totalNumberOfChatWindow={this.props.chatBarDetail.openedChatWindow.number} ></ChatWindow>) }
			<div style={divStyle}>
			<Contacts ContactDetails = {this.props.chatBarDetail.ContactsDetails} toggleContactWindow = {this.props.toggleContactWindow} openChatWindow={this.props.openChatWindow}/>
			<GroupChat ContactDetails = {this.props.chatBarDetail.GroupContacts} toggleGroupContactWindow = {this.props.toggleGroupContactWindow}/>
			<RecentChat />
			</div>
			</div>
		);
	}
}