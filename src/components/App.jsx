import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { nanoid } from 'nanoid';
import { eachFirstToUpperCase } from '../utils/utils';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Notification } from './Notification/Notification';

export class App extends Component {
  CONTACTS_KEY = 'contacts';
  state = {
    contacts: [],
    filter: '',
  };
  componentDidMount() {
    const contacts = localStorage.getItem(this.CONTACTS_KEY);
    if (contacts) {
      this.setState({ contacts: JSON.parse(contacts) });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { contacts } = this.state;
    if (contacts !== prevState.contacts) {
      localStorage.setItem(this.CONTACTS_KEY, JSON.stringify(contacts));
    }
  }

  addContact = ({ name, number }) => {
    const { contacts } = this.state;
    if (contacts.some(contact => contact.name === name)) {
      alert(
        `${eachFirstToUpperCase(
          name
        )} is already in contacts. Change contact's name or delete old.`
      );
      return;
    }
    const id = nanoid();
    this.setState({
      contacts: [{ name, number, id }, ...contacts],
      filter: '',
    });
  };
  changeFilter = e => {
    const { value } = e.target;
    this.setState({ filter: value });
  };

  getFilteredContacts = () => {
    const { filter, contacts } = this.state;
    const cleanFilter = filter.toLowerCase();
    return contacts
      .filter(contact => contact.name.includes(cleanFilter))
      .sort((a, b) => a.name.localeCompare(b.name));
  };

  deleteContact = idContact => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(({ id }) => id !== idContact),
    }));
  };
  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = this.getFilteredContacts();
    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />
        <h2>Contacts</h2>
        {contacts[0] ? (
          <Filter value={filter} onFilter={this.changeFilter} />
        ) : (
          <Notification message="No contacts added" />
        )}
        {contacts[0] && !filteredContacts[0] && (
          <Notification message="No contact found" />
        )}
        {filteredContacts[0] && (
          <ContactList
            contacts={filteredContacts}
            onDelete={this.deleteContact}
          />
        )}
      </>
    );
  }
}
